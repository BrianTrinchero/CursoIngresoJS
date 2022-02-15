/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Brian Trinchero Div Z
TP Ferretería facturación
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;


	alert(resultado);



}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var resultadoPromedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;

	resultadoPromedio = resultado / 3;

	alert(resultadoPromedio)
	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var precioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres

	precioFinal = resultado + (resultado * 0.21)

	alert(precioFinal)
	
}