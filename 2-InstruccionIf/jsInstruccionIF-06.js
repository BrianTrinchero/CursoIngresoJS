/*
Brian Trinchero Div Z
Ejercicio instrucciónIf 06
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 17)
	{
		alert("Es mayor de edad");
	}
	else 
	{
		if (edadIngresada > 12 && edadIngresada < 18)
		{
			alert("Es un adolescente");
		}
		else
		{
			alert("Es un niño");
		}
	}

}//FIN DE LA FUNCIÓN