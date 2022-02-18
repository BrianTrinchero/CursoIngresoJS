/*
Brian Trinchero Div Z
Ejercicio InstruccionSwitch 09
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var aumento;
	var descuento;
	var precioEstadiaBase;
	var precioFinal;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	precioEstadiaBase = 15000;
	aumento = 0;
	descuento = 0;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 0.20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 0.10;
					break;
				default:
					descuento = 0.20;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 0.20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 0.10;
					break;
				default:
					aumento = 0.20;
					break;
			}
			break;

		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					break;
				default:
					aumento = 0.10
					break;
			break;
	}
	precioFinal = precioEstadiaBase - (precioEstadiaBase * descuento) + (precioEstadiaBase * aumento);

	alert("Precio final de $" + precioFinal);
}//FIN DE LA FUNCIÓN