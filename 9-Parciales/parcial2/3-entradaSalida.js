//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo = document.getElementById("largo").value;
	largo = parseInt (largo);

	var ancho = document.getElementById("ancho").value;
	ancho = parseInt (ancho);
	
	var perimetro = largo * 2 + ancho * 2;

	alert ("Se necesitan " + perimetro * 6 + " metros de alambre");
}

