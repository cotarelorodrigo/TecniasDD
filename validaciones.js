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

console.log(b.get_celda(0, 0).sosBorde());

var c = undefined;

console.log(c == undefined);



