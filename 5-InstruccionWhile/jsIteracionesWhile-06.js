function mostrar()
{
	let numeros;
	let acumulador = 0;
	let promedio;
	let contador = 0;

	while (contador < 5) {
		numeros = parseInt(prompt("Ingrese un numero"));
		acumulador += numeros;
		contador ++;
	}
	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN