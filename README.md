
# Validación de tarjeta

## Índice

* [1. Objetivo del proyecto](#1-objetivo-del-proyecto)
* [2. Resumen](#2-resumen)
* [3. Criterios del proyecto](#3-criterios-del-proyecto)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Funcionalidad](#5-funcionalidad)

***

## 1. Objetivo del proyecto

Este proyecto consta de una aplicación web para un e-commerce, donde únicamente se realiza la validación del número de tarjeta de crédito que ingresa el usuario a un formulario. 
La validación de tarjeta se basa en el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado algoritmo de módulo 10, es un método de suma de verificación que se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.
En la siguiente imagen se muestran los pasos para el algoritmo de Luhn:

![gráfica algoritmo de Luhn](https://github.com/GenovevaCastro/DEV008-card-validation-veva/blob/main/src/Imagen%20algoritmo.jpg?raw=true)

## 2. Resumen

"Impresión y diseño Veva" es una tienda de comercio electrónico, que ofrece servicios de impresión en distintos formatos, así mismo ofrece servicios de publicidad y diseño. 
En este proyecto únicamente se mostrará la página final donde se realiza el pago de los servicios seleccionados al carrito del usuario. 
Con la única funcionalidad de validación de tarjeta.

* Se trabajo a base de un boilerplate, la estructura básica del proyecto se encuentra en distintas carpetas através de modulos en JS. 
* Lenguajes: Javascript, HTML, CSS
* Cuenta con pruebas unitarias

## 3. Criterios del proyecto

**1. Una interfaz que permite al usuari@:**

* Insertar un número (texto) que quiera validar.    
* Le oculta todos los dígitos del número de tarjeta a exepción de los últimos 4 caracteres.
* Una vez ingresado el número se ejecuta el algoritmo de Luhn. 
* Al usuario le aparece una alerta que anuncia si la tarjeta es valida o no.   
* Diseño amigable con el usuario. 

**2. Pruebas unitarias de los métodos.**  

Los metódos de `validator` (`isValid` y `maskify`) tienen cobertura con pruebas unitarias.
  
**3. Definición del producto.**  

La página se dedica a la venta en linea de servicios o productos de impresión y diseño.  

* Por lo tanto los principales usuarios son personas mayores de 18, posiblemente microempresas o proovedores mayoristas .
* El objetivo de estos usuarios es adquirir estos productos o servicios mediante una compra en linea de una manera rápida y segura. 
* Esta página ayudará a que el usuario pueda validar su tarjeta de crédito, ocultando los datos de esta al ser ingresada.

## 4. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript. 
En este proyecto NO se usan librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.
El documento ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como _code coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

### Descripción de scripts / archivos

* `src/index.html`: Este es el punto de entrada de la aplicación. Este archivo contiene el _markup_ (HTML), CSS y JavaScript.

* `src/style.css`: Este archivo contiene las reglas de estilo utilizadas para este proyecto.

```js
 * Alineación: al centro.
 * Tipografías: fantasy  &  geneva.
 * Fondo: de identidad corporativa de la empresa "Impresión y diseño Veva".
 * Imagen: representativa de los productos seleccionados al carrito de compras.
 * Opacidades: rgba(0, 0, 0, 0.359).
 * Paleta: rgb(0, 0, 0) - rgb(64, 44, 25) - rgb(142, 108, 58) - rgb(126, 93, 48) - rgb(255, 255, 255) - rgb(194, 12, 14)
 ```

![Gráfica paleta de colores](<https://github.com/GenovevaCastro/DEV008-card-validation-veva/blob/main/src/Paleta%20de%20clores.jpg?raw=true>)

* `src/validator.js`: En este archivo se implementa el objeto `validator`, el cual ya está _exportado_ en el _boilerplate_. 
Este objeto (`validator`) conitiene dos métodos:
  - `validator.isValid(tarjeta)`: `tarjeta` es un `string`
     con el número de tarjeta que se va a verificar. Esta función retorna
     un `boolean` dependiendo si la tarjeta es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

  - `validator.maskify(tarjeta)`: `tarjeta` es un `string` con
    el número de tarjeta y esta función retorna un `string` donde todos menos
    los últimos cuatro caracteres son reemplazados por (`#`).
    Esta función siempre mantiene los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.
    Simplemente enmascara el número de tarjeta, ejemplo:

    ```js
    maskify('4556364607935616') === '############5616'
    
    ```

* `src/index.js`: En este archivo se escuchan los eventos del DOM, invocando al
  `validator.isValid()` y `validator.maskify()` según sea necesario y se
  actualiza el resultado en la UI (interfaz de usuario).

* `test/validator.spec.js`: Este archivo contiene algunos tests de ejemplo para
  implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí, se usan las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## 5. Funcionalidad

**Descripción validator.js:**

* Function voltearTarjeta(tarjeta): 

Esta función se encarga de voltear los numeros de la tarjeta que el usuario ingresa la cuál retorna en tarjetaInvertida.

* Function doblarCadaSegundoDigito(tarjetaInvertida): 

Esta función multiplicara por 2 cada segundo digito de la tarjetaInvertida y la retornara en un arrayConNumerosYaMultiplicados.

* Function sumaDeDigitosMayoresDeDiez(arrayConNumerosYaMultiplicados):

En esta función inicializamos un arrayTarjetaConSumaDeNumerosMayoresDeDiez, en la cual  realizamos un foreach en el arrayConNumerosYaMultiplicados, de cada elemento hacemos la   condicional de si el elemento es mayor a 9: 
Hacemos un nuevo array que es igual a elementoArray el cual es igual a el elemento convertido a un string y hacemos una division de este. Se crea una constante donde se guardara el resultado de las suma de los digitos del elemento mayor a 9.
Esta constante resultadoDeSuma sera = a la funcion sumaElementosDelArray del (elementoArray) y coloca el resultadoDeSuma en la ultima posición del arrayTarjetaConSumaDeNumerosMayoresDeDiez, de lo contrario si no es mayor a 10 coloca el elemento en la ultima posición del arrayTarjetaConSumaDeNumerosMayoresDeDiez. Y retorna a arrayTarjetaConSumaDeNumerosMayoresDeDiez.

* Function sumaElementosDelArray(arrayDeNumeros):

Esta función se encarga de sumasr los digitos del elemento mayor a 9, esta funcion se utiliza en la funcion de sumaDeDigitosmayoresDeDiez, cuando se manda a llamar esta función tiene una variable llamada sumaDeDigitos la cual de inicio vale 0, pero despues del arrayDeNumeros realizamos un foreach de los digitos del elemento y tenemos que entonces sumaDeDigitos = sumaDeDigitos + parseInt(digito); 
Por ejemplo: si el elemento mayor a 9 es 13, se hace el for each del primer digito que es 1, asi que sumaDeDigitos = sumaDeDigitos + parseInt(1), entonces suma de digitos + 1 es + a 1 y lo returna a suma de digitos, por tanto ahora sumaDeDigitos = 1.
Se realiza el for each del segundo digito que es 3, asi que sumaDeDigitos = sumaDeDigitos + parseInt(3), entonces suma de digitos que ahora vale 1 + 3 = 4 y lo returna a suma de digitos, por tanto ahora sumaDeDigitos = 4.
y hace esta funcion en cada elemento mayor a 9 retornando estos a suma de digitos. 
 
* Function verificarSiEsMultiploDeDiez(numeroQueVerificara):

En la cual siel númeroQueVerificara % 10 es = a 0 retornara un true, de lo contrario un false. 

* Function mascara(tarjeta):

Retornara la tarjeta remplazando todos los elementos por un # menos los ultimos 4.

* isValid(tarjeta): 

Por ultimo retornamos verificarSiEsMultiploDeDiez(
      sumaElementosDelArray(
        sumaDeDigitosMayoresDeDiez(
          doblarCadaSegundoDigito(
            voltearTarjeta(tarjeta))))) todas las funciones en una.

  Así mismo en maskify(tarjeta) retornamos la funcion mascara(tarjeta) para que se ejecute todo esto en la validacion de la tarjeta.

  **Descripción index.js:**

* Function mostrarAlerta(validacion):

Si validación es true manda una alerta con Tarjeta vlida, si es false manda alerta de tarjeta invalida.
Esta funcion de mostrar alerta es llamada en la parte superior del archivo como: mostrarAlerta(validator.isValid(tarjeta)); es decir, mostrar alerta del validator, en isValid de la tarjeta, en el cual retorna un true o false que activa las alertas. 
Así mismo document.getElementById("tarjeta").value = validator.maskify(tarjeta) que es donde se manda a llamar la función que enmascara la tarjeta.

Todo esto sucede al ingresar el usuario sus datos y dar click en el boton. 

***
