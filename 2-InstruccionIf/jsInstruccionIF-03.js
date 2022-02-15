/*
Brian Trinchero Div Z
Ejercicio instrucciónIf 03
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN