/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Brian Trinchero Div Z
Ejercicio while 05
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" & sexoIngresado != "m" & sexoIngresado != null)
	{
		sexoIngresado = prompt("Ingreso no válido.Vuelva a intentarlo.")
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN