/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);

	suma = numeroUno + numeroDos;

	alert("La suma es " + suma);

}

