/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Brian Trinchero Div Z
TP Ferretería construcción
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var alambreTotal;
	var mensajeCantidadAlambre;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	perimetro = (largoTerreno + anchoTerreno) * 2;

	alambreTotal = perimetro * 3;

	mensajeCantidadAlambre = "Se debe comprar " + alambreTotal + " metros de alambre.";

	alert(mensajeCantidadAlambre);

}
function Circulo () 
{
	var radioTerreno;
	var circunferencia;
	var alambreTotal;
	var mensajeCantidadAlambre;

	radioTerreno = txtIdRadio.value;

	radioTerreno = parseInt(radioTerreno);

	circunferencia = 2 * 3.14159265359 * radioTerreno;

	alambreTotal = circunferencia * 3;

	mensajeCantidadAlambre = "Se debe comprar " + alambreTotal + " metros de alambre.";

	alert(mensajeCantidadAlambre);
	
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var areaTerreno;
	var totalCemento;
	var totalCal;
	var mensajeCementoCal;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	areaTerreno = largoTerreno * anchoTerreno;

	totalCemento = areaTerreno * 2;
	totalCal = areaTerreno * 3;

	mensajeCementoCal = "Se deben comprar " + totalCemento + " bolsas de cemento y " + totalCal + " bolsas de cal."

	alert(mensajeCementoCal);
	
}