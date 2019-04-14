function Celda(tipo_de_celda, invalid){
	this.nombre = 'Celda';
	this.impasable = tipo_de_celda;
	this.invalida = invalid || false
	this.celdas_adyacentes = [];

	this.set_celdas_adyacentes = function (a1, a2, a3, a4){
		this.celdas_adyacentes = [a1, a2, a3, a4 ] //izquierda, arriba, derecha, abajo
	};

	this.sosImpasable = function(){
							return this.impasable;
						}

	this.sosInvalida = function(){
						return this.invalida;
					}


	this.sosBorde = function(){
							if( ((this.celdas_adyacentes[0].sosInvalida()) || (this.celdas_adyacentes[1].sosInvalida()) 
								|| (this.celdas_adyacentes[2].sosInvalida()) ||  (this.celdas_adyacentes[3].sosInvalida())) && (this.impasble) ){
									return true;
							}
							return false;
						}

	//Esta funcion podria sacarse, ya que preguntar si no es impasble es lo mismo.
	this.sosTransitable = 	function(){
								if(this.sosImpasable() || this.sosInvalida() || this.sosBorde()) return false;
								return true;
							}

	this.conexionesPosibles = 	function(){
									if (!this.sosTransitable()) return 0;
									var cant = 0;
									for(var i = 0; i < this.celdas_adyacentes.length; i++)
										if(this.celdas_adyacentes[i].sosTransitable()) cant+=1;
									return cant;
								}


	this.avanzar =	function(cel_ant){
						var r = []
						for(var i = 0; i < this.celdas_adyacentes.length; i++){
							if( this.celdas_adyacentes[i].sosTransitable() && (this.celdas_adyacentes[i] != cel_ant) ){
								r.push(this.celdas_adyacentes[i])
							}
						}
						return r;
					}

	this.sosPipeDown = 	function(){
							if( (this.celdas_adyacentes[3].sosTransitable()) ) return true;
							return false;
						}

	this.sosPipeRight = function(){
							if(  (this.celdas_adyacentes[2].sosTransitable()) ) return true;
							return false;
						}


}

function Camino(a){
	this.recorrido = [].concat(a);

	this.mover =	function(){
						var c = this.recorrido[(this.recorrido.length)-1].avanzar(this.recorrido[(this.recorrido.length)-2]);
						//console.log('Puedo avanzar: ' + c);
						//console.log('Recorrido: ' + this.recorrido.concat(c[i]))
						var resultado = []
						for(var i = 0; i < c.length; i++){
							//console.log('ACA')
							resultado.push(new Camino(this.recorrido.concat(c[i])));
						}
						if(resultado.length == 0) resultado.push(new Camino(this.recorrido.concat(c[i]))) //Esto es por si c no vale nada, no se entra en el for, entonces asi devuelvo el mismo camino

						return resultado;
					}

	this.repetirCelda = function(celda){
							var count = 0;
							for(var i = 0; i < this.recorrido.length; i++){
								if(this.recorrido[i] == celda) count+=1;
							}
							if(count > 1) return true
							return false;

						}

}



function Laberinto(celdas, numeros_impasables){

	this.get_celda = function(i, j){
						try{
							//console.log(this.mapa[i][j])
							c = this.mapa[i][j];
							if (c == undefined) throw e;
							return c;
						}
						catch(e){
							return new Celda(true, true);
						}

					};


	this.mapa = function(){
					celdas = celdas.map(subarray => subarray.map(function( elem ){
														return numeros_impasables.includes(elem);
													}));

					celdas = celdas.map(subarray => subarray.map(function( elem ){
														return new Celda(elem)
													}));

					return celdas;
				}();


	this.setear_laberinto = function(){
								for(var i = 0; i < this.mapa.length; i++){ //i fila
									for(var j = 0; j < this.mapa[i].length; j++){ //j columna
										this.mapa[i][j].set_celdas_adyacentes(	this.get_celda(i, j-1), 
																				this.get_celda(i-1, j), 
																				this.get_celda(i,j+1), 
																				this.get_celda(i+1,j) );
									}
								}				
							};

	//Mover
	this.getRecorridosCelda = 	function(celda, pasos){
									var c = new Camino(celda);
									var movs = c.mover();
									var aux = []
									//console.log('CAMINOS: ' + movs)
									
									for(var i = 1; i < pasos; i++){
										aux = []
										//console.log('LONG: ' + movs.length)
										for(var j = 0; j < movs.length; j++){
											//console.log('Nuevo camino: ' + (movs[j].mover()) )
											aux = aux.concat(movs[j].mover())
										}
										movs = aux;
									}

									return movs;
								}



	//VALIDACIONES

	this.dimensiones_validas =	function(){
									long = this.mapa[0].length
									for(var i = 0; i < this.mapa.length; i++){ //i fila
										if(long != this.mapa[i].length) return false
									}
									return true	
								}

	//- El laberinto debe tener al menos dos celdas transitables.
	this.minimoCeldasTransitables = function(){
										var MINIMO = 2;
										var cant = 0
										for(var i = 0; i < this.mapa.length; i++){ //i fila
											for(var j = 0; j < this.mapa[i].length; j++){ //j columna
												if(this.mapa[i][j].sosTransitable()) cant+=1;
												if(cant >= 2) return true;
											}
										}
										return false;	
									}
					
	//- Toda celda transitable tiene al menos dos conexiones a otras celdas.
	this.celdasTransitables_conexionesMinimas = function(){
													for(var i = 0; i < this.mapa.length; i++){ //i fila
														for(var j = 0; j < this.mapa[i].length; j++){ //j columna
															if(this.mapa[i][j].sosTransitable() && (this.mapa[i][j].conexionesPosibles() < 2)) return false;
														}
													}
													return true
												}

	// - Existe al menos un camino entre cada par de celdas transitables.
	this.conexionEntreCeldas = 	function(){
									//Recorro primero filas
									var valida = false;

									for(var i = 1; i < this.mapa.length-2; i++){ //i fila
										valida = false;
										for(var j = 1; j < this.mapa[i].length-1; j++){ //j columna
											if(this.mapa[i][j].sosPipeDown()){
												valida = true; //Minimo una celda de la fila debe ser pipe horizontal
												break;
											}
										}
										if(!valida){
											console.log("No es valida la fila: " + (i+1))
											return false
										}
									}

								
									//Recorro por columnas
									for(var i = 1; i < this.mapa[0].length-2; i++){
										valida = false;
										for(var j = 1; j < this.mapa.length-1; j++){
											if(this.mapa[j][i].sosPipeRight()){
												valida = true; //Minimo una celda de la fila debe ser pipe horizontal
												break;
											}
										}
										if(!valida)
										{ 
											console.log("No es valida la columna: " + (i+1))
											return false
										}
									}
									return true;
								}

	//- Partiendo de una celda dada, no puedo regresar a la misma celda en menos de 4 movimientos 
	//sin pasar dos veces por la misma celda.
	this.minMovimientos =	function(){
								var r;
								for(var i = 0; i < this.mapa.length; i++){ //i fila
									for(var j = 0; j < this.mapa[i].length; j++){ //j columna
										if(this.mapa[i][j].sosTransitable())
										{
											r = this.getRecorridosCelda(this.mapa[i][j], 4);
											for(var k = 0; k < r.length; k++){
												if(r[k].repetirCelda(this.mapa[i][j])) return false
											}
										}
										
									}
								}

								return true;

							}


	this.validar =	function(){
						this.setear_laberinto();
		
						if(!this.dimensiones_validas()){
							console.log('Laberinto de dimensiones invalidas')
						}
						else if(!this.minimoCeldasTransitables()){
							console.log('No hay 2 celdas transitables')
						}
						else if(!this.celdasTransitables_conexionesMinimas()){
							console.log('Todas las celdas no tienen como minimo dos conexiones')
						}
						else if(!this.conexionEntreCeldas()){
							console.log('No existe al menos un camino entre cada celda')
						}
						else if(!this.minMovimientos()){
							console.log('Vuelve a la misma celda con 4 movimientos o menos')
						}
						else{
							return 'valido'
						}
						return 'INVALIDO!!!'
					}
}

