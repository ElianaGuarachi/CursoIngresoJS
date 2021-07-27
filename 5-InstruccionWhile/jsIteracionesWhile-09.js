/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let continuar;
	let maximo;
	let minimo;
	let flag = 1;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numero)){
			numero = parseInt(prompt("No es un numero. Ingrese un numero"));
		}
		
		if (flag){ // primera vez para guardar el primer valor
			maximo = numero;
			minimo = numero;
			flag = 0;
		} else {
			if (numero > maximo) {
				maximo = numero;
			} else if (numero < minimo){
				minimo = numero;
			}
		}

		continuar = prompt("Quiere continuar? si / no").toLowerCase();
	} while (continuar == 'si');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN