function mostrar()
{
	let estacion;
	let destino;
	let tarifabase;
	let preciofinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	tarifabase = 15000;

	if (estacion == "Invierno")	
	{
		switch(destino)
		{
			case "Bariloche":
				preciofinal = tarifabase *1.2;
				alert("Precio final: " + preciofinal);
				break;

			case "Mar del plata":
				preciofinal = tarifabase *0.8;
				alert("Precio final: " + preciofinal);
				break;

			case "Cataratas":
			case "Cordoba":
				preciofinal = tarifabase * 0.9;
				alert("Precio final: " + preciofinal);
				break;
		}
	}
	else if (estacion == "Verano")
	{
		switch(destino)
		{
			case "Bariloche":
				preciofinal = tarifabase *0.8;
				alert("Precio final: " + preciofinal);
				break;

			case "Mar del plata":
				preciofinal = tarifabase *1.2;
				alert("Precio final: " + preciofinal);
				break;

			case "Cataratas":
			case "Cordoba":
				preciofinal = tarifabase * 1.1;
				alert("Precio final: " + preciofinal);
				break;
		}
	}
	else {
		switch(destino)
		{
			case "Cordoba":
				preciofinal = tarifabase;
				alert("Precio final: " + preciofinal);
				break;

			default:
				preciofinal = tarifabase *1.1;
				alert("Precio final: " + preciofinal);
				break;
		}
	}


}//FIN DE LA FUNCIÓN