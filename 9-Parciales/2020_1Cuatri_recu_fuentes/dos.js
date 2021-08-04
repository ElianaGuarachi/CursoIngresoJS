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
  let tipoMayor;
  let cantMayor;
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let precioMasCaro;
  let tipoMasCaro;
  let flag = 1;

  do {

    tipo = prompt("Ingrese tipo: arena / cal / cemento").toLowerCase();
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("Ingrese tipo: arena / cal / cemento").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad:"));
    while(isNaN(cantidad) || cantidad < 1) {
      cantidad = parseInt(prompt("Error. Ingrese una cantidad valida:"));
    }

    precio = parseInt(prompt("Ingrese el precio"));
    while (isNaN(precio) || precio < 1) {
      precio = parseInt(prompt("Ingrese el precio"));
    }

    acumBolsas += cantidad;

    importe = cantidad * precio;
    importeBruto += importe;

    if (tipo == "arena") {
      acumArena += cantidad;
    } else if (tipo == "cemento") {
      acumCemento += cantidad;
    } else {
      acumCal += cantidad;
    }

    if (flag || precio > precioMasCaro) {
      precioMasCaro = precio;
      tipoMasCaro = tipo;
      flag = 0;
    }

    continuar = prompt("Quiere continuar? (si - no)").toLowerCase();
  } while(continuar == "si"); // fin del bucle
  

  if (acumBolsas > 30) {
    descuento = importeBruto * 25 / 100;
  } else if(acumBolsas > 10) {
    descuento = importeBruto * 15 / 100;
  } else {
    descuento = 0;
  }
  
  importeTotal = importeBruto - descuento;

  if (acumArena > acumCal && acumArena > acumCemento) {
    tipoMayor = "Arena";
    cantMayor = acumArena;
  } else if (acumCal >= acumArena && acumCal > acumCemento) {
    tipoMayor = "Cal";
    cantMayor = acumCal;
  } else {
    tipoMayor = "Cemento";
    cantMayor = acumCemento;
  }

 
document.write("a. El importe bruto a pagar es: " + importeBruto + "<br>");
if (descuento == 0) {
document.write("b. El importe bruto no tiene descuento, importe final: " + importeTotal + "<br>");
} else {
  document.write("b. El importe total con descuento es: " + importeTotal + " y el descuento fue de: " + descuento + "<br>");
}
document.write("d. El tipo con mas cantidad de bolsas es: " + tipoMayor +  ", con " + cantMayor + " de bolsas. <br>");
document.write("f. El tipo mas caro es: " + tipoMasCaro + ", con el precio de: "+ precioMasCaro);

} // fin de la funcion
