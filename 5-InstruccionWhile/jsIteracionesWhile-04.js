/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("Ingrese un numero del 0 al 9"));
	while(isNaN(numero) || numero < 0 || numero > 9){
		numero = parseInt(prompt("Error. Ingrese un numero del 0 al 9"));
	}
	
	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN