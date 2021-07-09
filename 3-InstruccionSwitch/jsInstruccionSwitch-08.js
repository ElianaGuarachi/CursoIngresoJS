function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino) {
		case "Bariloche":
			alert("FRIO");
			break;
		case "Cataratas":
			alert("CALOR");
			break;
		case "Mar del plata":
			alert("CALOR")
			break;
		case "Ushuaia":
			alert("FRIO");
			break;
	}

}//FIN DE LA FUNCIÓN