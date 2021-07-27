/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese su sexo f o m: ").toLowerCase();
	while (sexo != 'f'&& sexo!="m"){
		sexo = prompt("Error. Ingrese su sexo con f o m: ");
	}
	document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN