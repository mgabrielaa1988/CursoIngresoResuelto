//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var promedio;
	var flag = true;
	var peorNota;
	var mAprobados = 0;
	var nota;
	var acumNota = 0;
	var sexo;
	var cantAlumnos = 0;
	
	while (cantAlumnos < 3)
	{
		nota = prompt ("Ingrese la nota");
		nota = parseInt (nota);
		acumNota = acumNota + nota;
		cantAlumnos ++;
	
		while (nota < 0 && nota > 10)
			{
				nota = prompt ("Ingrese una nota entra 0 y 10 unicamente");
				nota = parseInt (nota);
			}

		if (flag)
			{
				peorNota = nota;
				flag = false;
			}
		else 
			{
				if (nota < peorNota)
				{
					peorNota = nota;
				}
			}

		sexo = prompt ("Ingrese f para femenino o m para masculino");	
		sexo = sexo.toLocaleLowerCase();

		while (sexo != "f" && sexo != "m")
			{
				sexo = prompt ("Ingrese solo f o m");
			}
		if (sexo == "m" && nota >= 6)
			{
				mAprobados ++;
			}
	}

	promedio = acumNota / cantAlumnos;
	promedio = parseInt (promedio);

	alert ("El promedio de las notas es: " + promedio  + ". La nota más baja es; " + peorNota + ". La cantidad de varones aprobados es: " + mAprobados );

}

