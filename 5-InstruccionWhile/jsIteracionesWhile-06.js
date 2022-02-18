/*
Brian Trinchero Div Z
Ejercicio while 06
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador = contador + 1
		numeroIngresado = prompt("ingresar número.");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;

	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN