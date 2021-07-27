/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let continuar;
	let sumaNeg = 0;
	let cantNeg = 0;
	let sumaPos = 0;
	let cantPos = 0;
	let ceros = 0;
	let cantPares = 0;
	let promedioPos = 0;
	let promedioNeg = 0;
	let diferencia = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		if (numero > 0){
			sumaPos += numero;
			cantPos ++;
		} else if (numero < 0){
			sumaNeg += numero;
			cantNeg ++;
		} else {
			ceros ++;
		}

		if (numero % 2 == 0) {
			cantPares ++;
		}

		continuar = prompt("Quiere continuar? si/no").toLowerCase();
	} while(continuar == 'si');

	if (cantPos){
		promedioPos = sumaPos / cantPos;
	}
	if (cantNeg) {
		promedioNeg = sumaNeg / cantNeg;
	}

	diferencia = cantPos - cantNeg;

	alert( "1-Suma de los negativos es: " + sumaNeg +
		"\n 2-Suma de los positivos es: " + sumaPos +
		"\n 3-Cantidad de positivos es: " + cantPos +
		"\n 4-Cantidad de negativos es: " + cantNeg +
		"\n 5-Cantidad de ceros es: " + ceros +
		"\n 6-Cantidad de números pares es: " + cantPares +
		"\n 7-Promedio de positivos es: " + promedioPos +
		"\n 8-Promedios de negativos es: " + promedioNeg +
		"\n 9-Diferencia entre positivos y negativos es: " + diferencia);

}//FIN DE LA FUNCIÓN