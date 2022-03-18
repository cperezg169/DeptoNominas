// ---------------------------------------------Audio con Click---------------------------------------------
const audio = new Audio();
audio.src = "./Click.mp3";
audio.volume = 0.2





// ---------------------------------------------Derechos de Autor-------------------------------------------->
var anio = new Date();
document.getElementById('anio').innerHTML = anio.getFullYear();






// <--------------------------------------------Mayuscula-------------------------------------------->
function mayus(e) {
e.value = e.value.toUpperCase();
}





// <--------------------------------------------Solo Letras-------------------------------------------->
function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
  especiales = [8, 39, 110]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.

  tecla_especial = false
  for(var i in especiales) {
      if(key == especiales[i]) {
          tecla_especial = true;
          break;
      }
  }

  if(letras.indexOf(tecla) == -1 && !tecla_especial){
      return false;}}
