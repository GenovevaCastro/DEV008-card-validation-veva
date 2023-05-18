const validator = {

  validarTarjeta(tarjeta) {

    console.log(voltearTarjeta(tarjeta) + '  Esta es la tarjeta volteada');

    var resultadoTarjetaInvertida = voltearTarjeta(tarjeta);

    var resultadoArrayMultiplicado = doblarCadaSegundoDigito(resultadoTarjetaInvertida);

    var resultadoArraySumaDeDigitosMayoresDeDiez = sumaDeDigitosMayoresDeDiez(resultadoArrayMultiplicado);

    var resultadoFinalDeSumaDeTarjeta = sumaElementosDelArray(resultadoArraySumaDeDigitosMayoresDeDiez);

    return verificarSiEsMultiploDeDiez(resultadoFinalDeSumaDeTarjeta);

  },
  maskify(tarjeta) {
    console.log(mascara(tarjeta))
    return mascara(tarjeta)
  }

};

function voltearTarjeta(tarjeta) {
  //se crea una funcion para poner el numero ingresado de la tarjeta al reves
  var tarjetaInvertida = tarjeta.split('').reverse().join('');
  //variable tarjetaInvertida es igual a la tarjeta dividida en caracteres, haciendo que esta se ponga en reversa y juntandola de nuevo en una cadena de caracteres
  //console.log(tarjetaInvertida);
  return tarjetaInvertida;
  //para que lo que se ejecuto en la variable tarjetaInvertida finalice y me devuelva el resultado y lo guarde en tarjetaInvertida    
}

function doblarCadaSegundoDigito(tarjetaInvertida) {
  //se crea funcion para multiplicar por 2 cada caracter que se encuentre en una posicion par de la tarjetaInvertida   
  var arrayDeTarjetaInvertida = tarjetaInvertida.split('');
  //se crea una variable arrayDeTarjetaInvertida que es igual a la tarjetainvertida pero dividida en elementos   
  //console.log(arrayDeTarjetaInvertida)
  var identificador = 1
  //Cree una variable que me ayuda a identificar en que posicion me encuentro mientras se realiza la busqueda de los elementos y va realizando sus funciones
  var arrayConNumerosYaMultiplicados = new Array();
  //se crea variable arrayConNumerosYaMultiplicados que es igual a un array vacio y que se esta inicializando con newArray()
  arrayDeTarjetaInvertida.forEach(element => {
    //del arrayDeTarjetaInvertida hacemos una busqueda por cada elemento por cada elemento que encuentre debe verificar las condicionales if y else
    //console.log(identificador)
    if (identificador % 2 == 0) {
      //si el identificador al dividirse entre dos es igual a cero entonces es verdadero
      //console.log ('la posicion del numero en el array es par, por tanto se multiplica por dos, que es igual a: ' + element*2);
      //por lo tanto se imprime el texto del numero es par y se multiplica ese elemento por 2
      arrayConNumerosYaMultiplicados.push(element * 2)
      //y agrega el elemento multiplicado por dos a la ultima posicion del arrayConNumerosYaMultiplicados
    }
    else {
      //de lo contrario
      // console.log ('la posicion del numero en el array es impar '+ element);
      //imprime el texto la posicion del numero en el array es impar y el elemento
      arrayConNumerosYaMultiplicados.push(element);
      //agrega el elemento a la ultima posicion del arrayConNumerosYaMultiplicados
    }
    identificador = identificador + 1
    //el elemento que comenzo en una posicion ahora sera igual a esa posicion mas una por lo tanto avanzara al siguiente elemento para comenzar de nuevo la busqueda
  });
  console.log(arrayConNumerosYaMultiplicados + '   Esta es la tarjeta multiplicada')
  //imprime el arrayConNumerosYaMultiplicados
  return arrayConNumerosYaMultiplicados;
  //lo que se hizo en la variable arrayConNumerosYaMultiplicados finaliza y se guarda en esa variable
}

function sumaDeDigitosMayoresDeDiez(arrayConNumerosYaMultiplicados) {
  //se crea funcion para la suma de los digitos mayores a diez del array con nunmeros ya multiplicados
  var arrayTarjetaConSumaDeNumerosMayoresDeDiez = new Array();
  //creamos una nueva variable para el array de la tarjeta con nsuma de numeros mayores de diez
  arrayConNumerosYaMultiplicados.forEach(element => {
    //del array con numeros ya multiplicados comenzamos a hacer una busqueda de los elementos
    if (element > 9) {
      //si mi elemento es mayor a 9...
      var elementoArray = new Array();
      //crea una variable para identificar mi elemento en el array y se inicia un nuevo array chuiquito para este
      elementoArray = element.toString().split('');
      //el elemento array va a ser igual al elemento creado a string y dividido en secciones
      var resultadoDeSuma = sumaElementosDelArray(elementoArray);
      //se crea la variable resultado de suma que es igual a la funcion que se creo abajo la cual hace la suma de los dos digitos que hay en el elemento
      //console.log('este numero es mayor a 9... ');
      //imprime el numero mayor a 9
      arrayTarjetaConSumaDeNumerosMayoresDeDiez.push(resultadoDeSuma);
    }
    //coloca el resultado de suma en la ultima posicion del array tarjeta con suma de numeros mayores a diez
    else {
      //de lo contrario
      //console.log('este numero es menor a 9 ...');
      //imprime este numero es menor a 9 y no hagas ninguna funcion
      arrayTarjetaConSumaDeNumerosMayoresDeDiez.push(element);
    }
    //coloca el elemento en la ultima posicion del array tarjeta con suma de numeros mayores a diez
  });
  console.log(arrayTarjetaConSumaDeNumerosMayoresDeDiez + '   Suma de los mayores a 10');
  //imprime en consola el array de tarjeta con suma de numeros mayores de diez
  return arrayTarjetaConSumaDeNumerosMayoresDeDiez;
}
//lo que se ejecuto en array de tarjeta con suma de mayores de diez finalice y devuelva el valor obtenido ahi mismo

function sumaElementosDelArray(arrayDeNumeros) {
  //se crea funcion para hacer la suma de los elementos mayores a 9 que se manda a llamar en la linea 80
  var sumaDeDigitos = 0;
  //creamos la variable suma de digitos que sera igual a 0 y avanza conforme pasa los digitos
  arrayDeNumeros.forEach(digito => {
    //del array de numeros se hace la busqueda de los digitos que se encuentran en el array
    sumaDeDigitos = sumaDeDigitos + parseInt(digito);
    //la variable suma de digitos ahora es igual suma de digitos + el digito que lo convertimos en entero
  });
  console.log(sumaDeDigitos + '   Suma');
  return sumaDeDigitos
}
//se finaliza la ejecucion de la suma de digitos y se devuelve lo obtenido en suma de digitos

function verificarSiEsMultiploDeDiez(numeroQueVerificara) {
  //se crea una funcion para verificar si la suma total de todos los ultimos elementos es multiplo de 10
  if ((numeroQueVerificara % 10) == 0) {
    //si la variable numero que verificara se divide entre 10 y este resultado es igual a 0
    console.log('Tarjeta valida');
    //entonces envia una alerta de tarjeta valida
    return true
  }
  else {
    //de lo contrario envia alerta de tarjeta no valida
    console.log('Tarjeta invalida');
    return false
  }
}

function mascara(tarjeta) {
  return tarjeta.slice(0, -4).replace(/./g, "#") + tarjeta.slice(-4);
}

export default validator;
