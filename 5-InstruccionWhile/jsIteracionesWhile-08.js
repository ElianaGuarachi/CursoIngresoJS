/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let continuar;
	let sumaPos =0;
	let mulNeg=1;
	let flag = 1;
	
	do {
		numero = parseInt(prompt("Ingrese un numero"));
		if(numero >= 0) {
			sumaPos += numero;
		} else {
			mulNeg *= numero;
			flag = 0;
		}
		continuar = prompt("Quiere continuar? si / no").toLowerCase();
	} while (continuar == 'si');

	if(flag) {
		mulNeg = 0;
	}	
	document.getElementById("txtIdSuma").value = sumaPos;
	document.getElementById("txtIdProducto").value = mulNeg;

}//FIN DE LA FUNCIÓN