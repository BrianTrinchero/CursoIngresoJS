/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Brian Trinchero Div Z
Ejercicio while 03
*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");



		while(claveIngresada != 'utn750' & claveIngresada != null)
		{
			alert("Clave incorrecta");
			claveIngresada = prompt("Ingrese la clave correspondiente.");

		}
	
}//FIN DE LA FUNCIÓN
