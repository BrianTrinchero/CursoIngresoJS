/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Brian Trinchero Div Z
Ejercicio while 04
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("El número ingresado no es válido, volver a ingresar.");
	}

	
}//FIN DE LA FUNCIÓN