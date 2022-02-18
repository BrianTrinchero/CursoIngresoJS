/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Brian Trinchero Div Z
Ejercicio while 07
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta != 'no')
	{
			contador = contador + 1
			numeroIngresado = prompt("Ingrese un número.");
			numeroIngresado = parseInt(numeroIngresado);
			acumulador = acumulador + numeroIngresado
			respuesta = prompt("¿Desea seguir ingresando números?")
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN