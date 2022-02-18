/*
Brian Trinchero Div Z
Ejercicio InstruccionSwitch 10
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensajeSeViaja;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensajeSeViaja = "Se viaja";
					break;
				default:
					mensajeSeViaja = "No se viaja";
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensajeSeViaja = "Se viaja";
					break;
				default:
					mensajeSeViaja = "No se viaja";
					break;
			}
			break;

		case "Otoño":
			mensajeSeViaja = "Se viaja";
			break;
		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensajeSeViaja = "No se viaja";
					break;
				default:
					mensajeSeViaja = "Se viaja";
					break;
			}
			break;

	}

	alert(mensajeSeViaja);
}//FIN DE LA FUNCIÓN