var lab = {"cells": [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 1, 1, 1, 1, 1, 0],
				[0, 1, 2, 1, 2, 1, 0],
				[0, 1, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};



var b = new Laberinto(lab['cells'], lab['impassableTypes']);

b.setear_laberinto()


//console.log('Validacion: ' + (b.get_celda(1, 1) == b.get_celda(1, 1)) )

//console.log( (b.get_celda(1, 1)).conectadaCon( b.get_celda(2, 1) ) );

var c = new Camino(b.get_celda(1, 1))

var d = b.getRecorridosCelda(b.get_celda(1, 1), 4);

for(var i = 0; i < d.length; i++){
	console.log(d[i].repetirCelda((b.get_celda(1, 1))))
}


//VALIDACIONES

console.log("Dimensiones valida de b: " + b.dimensiones_validas());

console.log("Al menos 2 celdas transitables: " + b.minimoCeldasTransitables());

console.log("Toda celda transitable tiene al menos dos conexiones a otras celdas: " + b.celdasTransitables_conexionesMinimas())

console.log('Existe al menos un camino entre cada par de celdas transitables: ' + b.conexionEntreCeldas())

console.log('Valifacion 4 movs: ' + b.minMovimientos())

var a1 = new Celda(true);
var a2 = new Celda(true);


console.log('IGUALDAD: '+ (a1 == a1))
