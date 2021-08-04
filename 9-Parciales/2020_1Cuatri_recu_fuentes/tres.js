/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let continuar;
	let mayoresSolteros = 0;
	let mujSoltViudas = 0;
	let abuelosFiebre = 0;
	let promedio;
	let acumMujCasadas = 0;
	let contMujCasadas = 0;
	let tempMax;
	let nacMax;
	let flag = 1;

	do {
		nombre = prompt("Ingrese el nombre: ").toUpperCase();

		nacionalidad = prompt("Ingrese la nacionalidad: ").toUpperCase();

		edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad < 1) {
			edad = parseInt(prompt("Error. Ingrese la edad"));
		}

		sexo = prompt("Ingrese el sexo (f - m)").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error. Ingrese el sexo (f - m)").toLowerCase();
		}

		estado = prompt("Ingrese su estado civil: (soltero / casado / viudo) "). toLowerCase();
		while(estado != "soltero" && estado != "casado" && estado != "viudo") {
			estado = prompt("Ingrese su estado civil: (soltero / casado / viudo) "). toLowerCase();
		}

		temperatura = parseFloat(prompt("Ingrese su temperatura"));
		while(isNaN(temperatura) || temperatura < 34 || temperatura > 42) {
			temperatura = parseFloat(prompt("Error. Ingrese su temperatura"));
		}

		if (flag || temperatura > tempMax) {
			tempMax = temperatura;
			nacMax = nacionalidad;
			flag = 0;
		}

		if (edad > 17 && estado == "soltero") {
			mayoresSolteros++;
		}

		if (sexo == "f" && estado != "casado") {
			mujSoltViudas ++;
		}

		if (edad > 60 && temperatura > 38) {
			abuelosFiebre ++;
		}

		if(sexo == "f"){
			acumMujCasadas += edad;
			contMujCasadas ++;
		}

		continuar = prompt("Quiere continuar? (si - no)");
	} while (continuar == "si");

	promedio = acumMujCasadas / contMujCasadas;

document.write("a. La nacionalidad de la persona con mas temperatura es: " + nacMax + ", con " + tempMax + " de temperatura. <br>");
document.write("b. La cantidad de mayores de edad solteros es: " + mayoresSolteros + "<br>");
document.write("c. La cantidad de mujeres solteras y viudas es: " + mujSoltViudas + "<br>");
document.write("d. La cantidad de personas de la tercera edad con mas de 38 C es: " + abuelosFiebre + "<br>");
document.write("e. El promedio de edad entre mujeres casadas es: " + promedio + "<br>");


} // fin de la funcion
