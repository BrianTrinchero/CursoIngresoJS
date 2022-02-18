/*
Brian Trinchero Div Z
Ejercicio InstruccionSwitch 02
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensajeSobreClima;

	switch (mesDelAño)
	{
		case("Enero"):
		case("Febrero"):
		case("Marzo"):
		case("Abril"):
		case("Mayo"):
		case("Junio"):
			mensajeSobreClima = "Falta para el invierno.";
			break;
		case("Julio"):
		case("Agosto"):
			mensajeSobreClima = "Abrigate que hace frio.";
			break;
		default:
			mensajeSobreClima = "Ya pasamos el frio, ahora calor!!!."
			break;

	}
	alert(mensajeSobreClima)



}//FIN DE LA FUNCIÓN