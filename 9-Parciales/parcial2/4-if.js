//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno = prompt ("Ingrese un numero");
	numeroUno = parseInt (numeroUno);
	var numeroDos = prompt ("Ingrese otro numero");
	numeroDos = parseInt (numeroDos);
	var resultadoMult;
	var resultadoResta;
	var resultadoSuma;

	if (numeroUno == numeroDos)
		{
			resultadoMult = numeroUno * numeroDos;
		}
	else
		{
			resultadoMult = 0;
		}
	if (numeroUno > numeroDos)
		{
			resultadoResta = numeroUno - numeroDos;
		}
	else
		{
			resultadoResta = 0;
		}
	if (numeroUno < numeroDos)
		{
			resultadoSuma = numeroUno + numeroDos;
		}
	else 
		{
			resultadoSuma = 0;
		}

	document.write ("Si ambos numeros son iguales, el resultado de la multiplicacion es: " + resultadoMult + "<br>");
	document.write ("Si el primer numero es mayor, el resultado de la resta es: " + resultadoResta + "<br>");
	document.write ("Si el segundo numero es mayor, el resultado es: " + resultadoSuma);
}

