/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largodelterreno;
    let anchodelterreno;
    let perimetro;
    let cantidaddealambre;
    
    largodelterreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchodelterreno = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (largodelterreno + anchodelterreno) * 2;

    cantidaddealambre = perimetro*3;

    alert("Necesitara " + cantidaddealambre + " de alambre");

    document.getElementById("txtIdLargo").value = ""
    document.getElementById("txtIdAncho").value = ""

}

function Circulo () 
{
	let radio;
    let perimetro;
    let cantidaddealambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = Math.PI*radio*2;

    cantidaddealambre = perimetro*3;

    cantidaddealambre = cantidaddealambre.toFixed(2);

    alert("Necesitara para el terreno circular " + cantidaddealambre + " de alambre");


}
function Materiales () 
{
	let largodelterreno;
    let anchodelterreno;
    let area;
    let cemento;
    let cal;
    
    largodelterreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchodelterreno = parseFloat(document.getElementById("txtIdAncho").value);

    area = largodelterreno * anchodelterreno;

    cemento = area * 2;
    cal = area * 3;

    alert("Para el contrapiso necesitara " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

    document.getElementById("txtIdLargo").value = ""
    document.getElementById("txtIdAncho").value = ""


}