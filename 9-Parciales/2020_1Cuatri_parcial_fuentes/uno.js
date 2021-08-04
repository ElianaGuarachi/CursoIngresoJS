
function mostrar()
{
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let precioAlBarato;
    let cantAlBarato;
    let fabAlBarato;
    let flag = 1;
    let acumAlcohol = 0;
    let acumBarbijo = 0;
    let acumJabon = 0;
    let contAlcohol = 0;
    let contBarbijo = 0;
    let contJabon = 0;
    let promedio;
    let tipoMasCantidad;

    for (let i = 0; i < 5; i++) {

    tipo = prompt("Ingrese el tipo de producto (barbijo / jabon / alcohol)").toLowerCase();
    while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
        tipo = prompt("Error. Reingrese el tipo de producto (barbijo / jabon / alcohol)").toLowerCase();
    }

    precio = parseInt(prompt("Ingrese el precio (100-300)"));
    while(isNaN(precio) || precio < 100 || precio > 300){
        precio = parseInt(prompt("Error. Reingrese el precio (100-300)"));
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de productos (max 1000)"));
    while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000){
        cantidad = parseInt(prompt("Error. Reingrese la cantidad de productos (max 1000)"));
    }

    marca = prompt("Ingrese la marca del producto").toLowerCase();
    while(marca.length == 0){
        marca = prompt("Error. Reingrese la marca del producto").toLowerCase();
    }

    fabricante = prompt("Ingrese el fabricante del producto").toLowerCase();
    while(fabricante.length == 0){
        fabricante = prompt("Error. Reingrese el fabricante del producto").toLowerCase();
    }

    if (tipo == "alcohol"){

        if(flag || precio < precioAlBarato){
            precioAlBarato = precio;
            cantAlBarato = cantidad;
            fabAlBarato = fabricante;
            flag = 0;
        }

        acumAlcohol += cantidad;
        contAlcohol ++;

    } else if (tipo == "barbijo") {
        acumBarbijo += cantidad;
        contBarbijo ++;
    }else {
        acumJabon += cantidad;
        contJabon ++;
    }

    } // fin del for

    if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon){
        tipoMasCantidad = "Alcohol";
        promedio = acumAlcohol / contAlcohol;
    } else if (acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon){
        tipoMasCantidad = "Barbijo";
        promedio = acumBarbijo / contBarbijo;
    } else {
        tipoMasCantidad = "Jabon";
        promedio = acumJabon / contJabon;
    }
    
    
	document.write("a. El precio del alcohol mas barato es: " + precioAlBarato + ". Cantidad: " + cantAlBarato + ". Fabricante: " + fabAlBarato + "<br>");
    document.write("b. El tipo con mas unidades es: " + tipoMasCantidad + ", el promedio de cantidad es: " + promedio + "<br>");
    document.write("c. La cantidad total de unidades de jabon es: " + acumJabon + "<br>");

}// fin de la funcion
