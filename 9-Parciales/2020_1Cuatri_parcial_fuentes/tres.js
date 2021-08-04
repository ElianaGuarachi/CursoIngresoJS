function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let continuar;
	let tempMayor;
	let nombreTempMayor;
	let flag = 1;
	let cantViudosAdultos = 0;
	let hombresSoltViudos = 0;
	let abuelosFiebre = 0;
	let acumEdadHombres = 0;
	let cantEdadHombres = 0;
	let promedio;

	do{
		nombre = prompt("Ingrese nombre del pasajero/a").toUpperCase();
		edad = parseInt(prompt("Ingrese la edad del pasajero"));
		while(isNaN(edad) || edad < 0){
			edad = parseInt(prompt("Error. Reingrese la edad del pasajero"));
		}
		sexo = prompt("Ingrese el sexo del pasajero (f / m)").toLowerCase();
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error. Reingrese el sexo del pasajero (f / m)").toLowerCase();
		}
		estadoCivil = prompt("Ingrese el estado civil (soltero / casado / viudo)").toLowerCase();
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Ingrese el estado civil (soltero / casado / viudo)").toLowerCase();
		}
		temperatura = parseFloat(prompt("Ingrese la temperatura corporal"));
		while(isNaN(temperatura) || temperatura < 34 || temperatura > 42){
			temperatura = parseFloat(prompt("Ingrese la temperatura corporal"));
		}

		if (flag || temperatura > tempMayor) {
			nombreTempMayor = nombre;
			tempMayor = temperatura;
			flag = 0;
		}

		if(edad > 17 && estadoCivil == "viudo") {
			cantViudosAdultos ++;
		}

		if(sexo == 'm' && estadoCivil != "casado") {
			hombresSoltViudos ++;
		}

		if(edad > 60 && temperatura > 38){
			abuelosFiebre ++;
		}

		if(sexo == 'm' && estadoCivil == "soltero") {
			acumEdadHombres += edad;
			cantEdadHombres ++;
		}

		continuar = prompt("Quiere continuar? (si / no)");
	} while(continuar == "si");

	promedio = acumEdadHombres / cantEdadHombres;

document.write("a. El nombre del pasajero con mayor temperatura es: " + nombreTempMayor + ", con " + tempMayor + " grados. <br>");
document.write("b. Cantidad de mayores de edad viudos/as: " + cantViudosAdultos + "<br>");
document.write("c. Cantidad de hombres solteros y viudos: " + hombresSoltViudos + "<br>");
document.write("d. Cantidad de personas de la tercera edad con mas de 38 de temp: " + abuelosFiebre + "<br>");
document.write("e. El promedio de edad entre los hombres solteros es: " + promedio + "<br>");

}// fin del for
