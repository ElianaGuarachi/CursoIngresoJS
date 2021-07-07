/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let pasaje;

	temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
	pasaje = (temperatura -32) * 5/9;
	pasaje = pasaje.toFixed(1);
	alert(temperatura + " Fahrenheit son " + pasaje + " grados");

}

function CentigradosFahrenheit () 
{
	let temperatura;
	let pasaje;

	temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
	pasaje = temperatura *9/5 + 32;
	pasaje = pasaje.toFixed(1);
	alert(temperatura + " centigrados son " + pasaje + " Fahrenheit");

}
