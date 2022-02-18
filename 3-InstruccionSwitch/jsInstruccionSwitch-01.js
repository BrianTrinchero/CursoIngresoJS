/*
Brian Trinchero Div Z
Ejercicio InstruccionSwitch 01
*/

function mostrar()
{
	var mesDelAño =txtIdMes.value;
	var mensajeSobreMes

	mensajeSobreMes = "No hay informacion sobre dicho mes."

	switch (mesDelAño)
	{
		case "Enero":
			mensajeSobreMes ="que comiences bien el año!!!";
			break;
		case "Marzo":
			mensajeSobreMes ="a clases!!!";
			break;
		case "Julio":
			mensajeSobreMes ="se vienen las vacaciones!!!";
			break;
		case "Diciembre":
			mensajeSobreMes ="Felices fiesta!!!";
			break;
	}
	alert(mensajeSobreMes);




}//FIN DE LA FUNCIÓN