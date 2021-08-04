function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let continuar;
  let acumBolsas = 0;
  let descuento;
  let importe;
  let importeBruto = 0;
  let importeTotal;
  let tipoMasBolsas;
  let cantMasBolsas;
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let precioCaro;
  let tipoCaro;
  let flag = 1;

  do {
    tipo = prompt("Ingrese tipo de productos (arena / cal / cemento)").toLowerCase();
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("Error. Reingrese tipo de productos (arena / cal / cemento)").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while(isNaN(cantidad) || cantidad < 1){
      cantidad = parseInt(prompt("Error. Reingrese la cantidad de bolsas"));
    }

    precio = parseInt(prompt("Ingrese el precio por bolsa"));
    while(isNaN(precio) || precio < 1){
      precio = parseInt(prompt("Error. Reingrese el precio por bolsa"));
    }

    acumBolsas += cantidad;
    importe = cantidad * precio;
    importeBruto += importe;

    if(tipo == "arena"){
      acumArena += cantidad;
    } else if (tipo == "cal"){
      acumCal += cantidad;
    } else {
      acumCemento += cantidad;
    }

    if(flag || precio > precioCaro) {
      precioCaro = precio;
      tipoCaro = tipo;
      flag = 0;
    }

    continuar = prompt("Quiere continuar? (si - no)");
  } while (continuar == "si");

  if(acumBolsas > 30){
    descuento = importeBruto * .25;
  } else if(acumBolsas > 10) {
    descuento = importeBruto * .15;
  } else {
    descuento = 0;
  }

  importeTotal = importeBruto - descuento;

  if(acumArena > acumCal && acumArena > acumCemento){
    tipoMasBolsas = "Arena";
    cantMasBolsas = acumArena;
  } else if (acumCal >= acumArena && acumCal > acumCemento){
    tipoMasBolsas = "Cal";
    cantMasBolsas = acumCal;
  } else {
    tipoMasBolsas = "Cemento"
    cantMasBolsas = acumCemento;
  }

  document.write("a. El importe bruto a pagar sin descuento es: " + importeBruto + "<br>");
  if(descuento == 0){
    document.write("b. No se aplica descuento, importe total es: " + importeTotal + "<br>");
  } else {
    document.write("b. El importe total es: " + importeTotal + ", su descuento fue de: " + descuento + "<br>");
  }
  document.write("d. El tipo con mas cantidad de bolsas es: " + tipoMasBolsas + ", con: " + cantMasBolsas + " de bolsas. <br>");
  document.write("f. El tipo mas caro es: " + tipoCaro + ", con el precio de: " + precioCaro + "<br>");


}//fin de la funcion
