/*
Brian Trinchero Div Z
Ejercicio instrucciónIf 10
*/
function mostrar()
{
	let numeroAleatorio;
	let notaExcelente;
	let notaAprobo;
	let notaDesaprobado;

	numeroAleatorio = (Math.random() * (11 - 1)) + 1;

	numeroAleatorio = Math.round(numeroAleatorio);

	notaExcelente = "EXCELENTE"
	notaAprobo = "APROBÓ"
	notaDesaprobado = "Vamos, la próxima se puede"

	if (numeroAleatorio > 8)
	{
		alert(notaExcelente)
	}
	else
	{
		if(numeroAleatorio > 3)
		{
			alert(notaAprobo)
		}
		else
		{
			alert(notaDesaprobado)
		}
	}

}//FIN DE LA FUNCIÓN