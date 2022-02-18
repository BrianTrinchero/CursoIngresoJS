/*
Brian Trinchero Div Z
Ejercicio InstruccionSwitch 08
*/

function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Aquí hace frío");
			break;
		default:
			alert("Aquí hace calor");
			break;
	}


}//FIN DE LA FUNCIÓN