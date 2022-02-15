/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Brian Trinchero Div Z
Ejercicio Entrada/Salida 6*/

function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno); //parseInt cambia un elemento a entero

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno + numeroDos;
	
	alert(resultado);

}

