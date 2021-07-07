/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);

	suma = numeroUno + numeroDos;

	alert("El resultado de la suma es " + suma);

}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;

	numeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);

	resta = numeroUno - numeroDos;

	alert("El resultado de la resta es " + resta);

}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicacion;

	numeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);

	multiplicacion = numeroUno * numeroDos;

	alert("El resultado de la multiplicacion es " + multiplicacion);

}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let division;

	numeroUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseFloat(document.getElementById("txtIdNumeroDos").value);

	division = numeroUno / numeroDos;

	division = division.toFixed(2);

	alert("El resultado de la division es " + division);
}

