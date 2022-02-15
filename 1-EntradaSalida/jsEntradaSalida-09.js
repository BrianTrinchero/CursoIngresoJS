/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Brian Trinchero Div Z
Ejercicio Entrada/Salida 9*/

function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	resultado = sueldo + (sueldo / 100 * 10);

	txtIdResultado.value = resultado;

	alert(resultado);
}
