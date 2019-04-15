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

var lab2 = {"cells": [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 1, 1, 1, 1, 1, 0],
				[0, 2, 2, 1, 2, 1, 0],
				[0, 1, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab3 = {"cells": [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab4 = {"cells": [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab5 = {"cells": [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab6 = {"cells": [
				[0, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 0],
				[0, 1, 0, 0, 1, 0],
				[0, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab7 = {"cells": [
				[0, 0, 0, 0, 0, 0],
				[0, 1, 1, 1, 1, 0],
				[0, 1, 1, 0, 1, 0],
				[0, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab8 = {"cells": [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0, 1, 1, 1, 0],
				[0, 1, 0, 1, 0, 1, 0, 1, 0],
				[0, 1, 1, 1, 0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab9 = {"cells": [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 0, 1, 1, 1, 1, 0],
				[0, 0, 1, 0, 0, 0, 0, 1, 0],
				[0, 0, 1, 1, 1, 1, 0, 1, 0],
				[0, 0, 1, 0, 0, 0, 0, 1, 0],
				[0, 0, 1, 0, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

var lab10 = {"cells": [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0, 1, 1, 1, 0],
				[0, 1, 2, 1, 0, 1, 2, 1, 0],
				[0, 1, 1, 1, 0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 1, 2, 1, 0],
				[0, 1, 1, 1, 1, 1, 1, 1, 0],
				[0, 1, 2, 1, 2, 1, 2, 1, 0],
				[0, 1, 1, 1, 1, 1, 1, 1, 0]
				],
				"impassableTypes": [
				0,
				2
				]};

/*var b = new Laberinto(lab10['cells'], lab10['impassableTypes']);

b.setear_laberinto()

console.log( b.todasConexcionesPosibles(b.get_celda(1, 1)) );
*/

/*
//VALIDACIONES

console.log("Dimensiones valida de b: " + b.dimensiones_validas());

console.log("Al menos 2 celdas transitables: " + b.minimoCeldasTransitables());

console.log("Toda celda transitable tiene al menos dos conexiones a otras celdas: " + b.celdasTransitables_conexionesMinimas())

console.log('Existe al menos un camino entre cada par de celdas transitables: ' + b.conexionEntreCeldas())

console.log('Valifacion 4 movs: ' + b.minMovimientos())*/


var b = new Laberinto(lab['cells'], lab['impassableTypes']);
console.log('Laberinto 1: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab2['cells'], lab2['impassableTypes']);
console.log('Laberinto 2: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab3['cells'], lab3['impassableTypes']);
console.log('Laberinto 3: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab4['cells'], lab4['impassableTypes']);
console.log('Laberinto 4: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab5['cells'], lab5['impassableTypes']);
console.log('Laberinto 5: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab6['cells'], lab6['impassableTypes']);
console.log('Laberinto 6: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab7['cells'], lab7['impassableTypes']);
console.log('Laberinto 7: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab8['cells'], lab8['impassableTypes']);
console.log('Laberinto 8: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab9['cells'], lab9['impassableTypes']);
console.log('Laberinto 9: ' + b.validar())

console.log('-------------')

b = new Laberinto(lab10['cells'], lab10['impassableTypes']);
console.log('Laberinto 10: ' + b.validar())



