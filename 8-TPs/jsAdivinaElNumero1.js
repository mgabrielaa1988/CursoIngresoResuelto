/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numero;
var contadorIntentos = 0;
var respuesta = true;

function comenzar()
{
  numeroSecreto = 0
}

function verificar()
{
  numeroSecreto = Math.random((101-1)+1);
  numero = document.getElementById("numero").value;
  numero = parseInt (numero);

  while (numero =! numeroSecreto)
  {
    contadorIntentos ++;
    numero = document.getElementById("numero").value;
    numero = parseInt (numero);

    if (numero < numeroSecreto)
    {
      alert ("Falta... ");
    }
    if (numero > numeroSecreto)
    {
      alert ("Se paso... ");
    }
    
  }
  
  if (numero == numeroSecreto)
  {
    alert ("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos.");
  }
  
  document.getElementById("intentos").value = contadorIntentos;

  
}