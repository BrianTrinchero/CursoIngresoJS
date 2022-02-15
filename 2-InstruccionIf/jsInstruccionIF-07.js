/*
Brian Trinchero Div Z
Ejercicio instrucciónIf 07
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById('estadoCivil').value;

	if (edadIngresada < 18 && estadoCivil != 'Soltero')
	{
		alert("Es muy pequeño para NO ser soltero")
	}
	


}//FIN DE LA FUNCIÓN