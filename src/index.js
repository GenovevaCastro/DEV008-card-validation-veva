import validator from './validator.js';

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {

  const tarjeta = document.getElementById("tarjeta").value;
  
  mostrarAlerta(validator.isValid(tarjeta));

  document.getElementById("tarjeta").value = validator.maskify(tarjeta);

});

function mostrarAlerta(bandera) {
  if (bandera) {
    alert('Tarjeta Valida')
  }
  else {
    alert('Tarjeta Invalida')
  }
}

