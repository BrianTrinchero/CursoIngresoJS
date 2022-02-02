/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Brian Trinchero Div Z
Ejercicio Entrada/Salida 5 */
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.");
}

