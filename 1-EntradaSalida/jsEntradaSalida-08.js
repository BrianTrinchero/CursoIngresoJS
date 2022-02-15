/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 .
Brian Trinchero Div Z
Ejercicio Entrada/Salida 8"*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var resultado;

	numeroDividendo = txtIdNumeroDividendo.value;
	numeroDividendo = parseInt(numeroDividendo);

	numeroDivisor = txtIdNumeroDivisor.value;
	numeroDivisor = parseInt(numeroDivisor);

	resultado = numeroDividendo % numeroDivisor;
	
	alert("El resto es " + resultado);
}
