/*
Brian Trinchero Div Z
Ejercicio instrucciónIf 05
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 13 || edadIngresada > 17)
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN