/*
Brian Trinchero Div Z
Ejercicio instrucciónIf 04
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 12 && edadIngresada < 18)
	{
		alert("Es un adolescente");
	}

}//FIN DE LA FUNCIÓN