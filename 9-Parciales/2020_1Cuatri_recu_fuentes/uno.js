
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let flag = 1;
	let jabonPrecioCaro;
	let jabonCantCaro;
	let jabonFabCaro;
	let acumJabon = 0;
	let contJabon = 0;
	let acumAlcohol = 0;
	let contAlcohol = 0;
	let acumBarbijo = 0;
	let contBarbijo = 0;
	let promedio;
	let productoMayor;

	for(let i = 0; i < 3; i++) {

	tipo = prompt("Ingrese el tipo de producto").toLowerCase();
	while(tipo != "alcohol" && tipo != "barbijo" && tipo != "jabon") {
		tipo = prompt("Error. Ingrese el tipo de producto").toLowerCase();
	}

	precio = parseInt(prompt("Ingrese el precio (100-300)"));
	while(isNaN(precio) || precio < 100 || precio > 300) {
		precio = parseInt(prompt("Error. Ingrese el precio (100-300)"));
	}

	cantidad = parseInt(prompt("Ingrese la cantidad max 1000"));

	while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
	cantidad = parseInt(prompt("Error. Ingrese la cantidad max 1000"));
	}

	marca = prompt("Ingrese la marca").toLowerCase();
	while(marca.length == 0) {
		marca = prompt("Error. Ingrese la marca").toLowerCase();
	}

	fabricante = prompt("Ingrese el fabricante").toLowerCase();

	if (tipo == "jabon") {
		
		if (flag || precio > jabonPrecioCaro ) {
			jabonPrecioCaro = precio;
			jabonCantCaro = cantidad;
			jabonFabCaro = fabricante;
			flag = 0;
		} //a
		
		acumJabon += cantidad;
		contJabon++;

	} else if (tipo == "alcohol") {
		acumAlcohol += cantidad;
		contAlcohol ++;
	} else  {
		acumBarbijo += cantidad;
		contBarbijo++;
	} 


} // fin del for

if (acumAlcohol > acumBarbijo && acumAlcohol > acumJabon) {
	productoMayor = "Alcohol";
	promedio = acumAlcohol / contAlcohol;
} else if (acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon) {
	productoMayor = "Barbijo"
	promedio = acumBarbijo / contBarbijo;
} else {
	productoMayor = "Jabon"
	promedio = acumJabon / contJabon;
} //b

document.write("a) El precio del jabon mas caro es: " + jabonPrecioCaro + ". Cantidad: " + jabonCantCaro + " . Fabricante: " + jabonFabCaro + "<br>");
document.write("b) El tipo de producto con mayor cantidad es: " + productoMayor + " . El promedio es: " + promedio + "<br>");
document.write("c) Se compraron en total de barbijo: " + acumBarbijo);


} //fin de la funcion
