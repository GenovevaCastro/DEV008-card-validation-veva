import validator from './validator.js';

const boton = document.getElementById("boton");
// variable boton es igual al boton que obtenemos del html con id boton

boton.addEventListener("click", () => {
    //agregamos un escuchador al boton para que al hacer click haga lo siguiente

  const tarjeta = document.getElementById("tarjeta").value;
  //tarjeta es igual al valor del id tarjeta del html 
  
  mostrarAlerta(validator.isValid(tarjeta));
  //haz la funcion mostrar alerta con la funcion isValid del documento del validator la cual contiene todas las funciones del algritmo de luhn

  document.getElementById("tarjeta").value = validator.maskify(tarjeta);
  //obten del elemento con id tarjeta e igualalo a la constante validator y maskify  que se encuentran en el validator

});

function mostrarAlerta(validacion) {
    //mostrar alerta de si es valida o no la tarjeta
  if (validacion) {
    //si bandera es veradero
    alert('Tarjeta Valida')
    //envia una alerta de tarjeta valida
  }
  else {
    //de lo contrario
    alert('Tarjeta Invalida')
    //envia alerta de tarjeta invalida
  }
}

