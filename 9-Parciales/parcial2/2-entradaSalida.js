//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio = prompt ("Ingrese el valor del producto");
	precio = parseInt (precio);
	document.getElementById("importe").value = precio * 1.21;
}

