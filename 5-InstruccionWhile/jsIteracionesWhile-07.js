/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let continuar = 'si';
	let suma = 0;
	let contador = 0;
	let promedio;

	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		suma += numero;
		contador ++;
		continuar = prompt("Quiere continuar? si / no").toLowerCase();

	} while (continuar == 'si');

	promedio = suma / contador;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN