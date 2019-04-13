function Celda(tipo_de_celda){
	this.nombre = 'Celda';
	this.impasable = tipo_de_celda;
	this.celdas_adyacentes = [];

	this.set_celdas_adyacentes = function (a1, a2, a3, a4){
		this.celdas_adyacentes = [a1, a2, a3, a4 ] //izquierda, arriba, derecha, abajo
	};

	this.sosImpasable = function(){
							return this.impasable;
						}

	this.sosBorde = function(){
							if( (this.celdas_adyacentes[0] == undefined) || (this.celdas_adyacentes[1] == undefined) 
								|| (this.celdas_adyacentes[2] == undefined) ||  (this.celdas_adyacentes[3] == undefined) ){
									return true;
							}
							return false;
						}
}




function Laberinto(celdas, numeros_impasables){

	this.get_celda = function(i, j){
						try{
							//console.log(this.mapa[i][j])
							return this.mapa[i][j];
						}
						catch(e){
							return undefined;
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


	this.minimo_celdas_transitables = function(){
										for(var i = 0; i < this.mapa.length; i++){ //i fila
											for(var j = 0; j < this.mapa[i].length; j++){ //j columna
												
											}
										}	

	}

}

