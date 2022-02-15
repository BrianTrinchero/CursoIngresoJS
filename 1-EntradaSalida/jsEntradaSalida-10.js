/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Brian Trinchero Div Z
Ejercicio Entrada/Salida 10*/

function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = 0.25;

	resultado = importe - (importe * descuento);
	txtIdResultado.value = resultado;

}
