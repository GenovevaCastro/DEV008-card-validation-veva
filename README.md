# Validar tarjeta de crédito

## Índice

* [1. Objetivo del proyecto](#1-objetivo-del-proyecto)
* [2. Resumen](#2-resumen)
* [3. Criterios del proyecto](#3-criterios-del-proyecto)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Funcionalidad](#5-funcionalidad)
* [6. Tips](#6-tips)


***

## 1. Objetivo del proyecto

Este proyecto consta de una aplicación web para un e-commerce, donde únicamente se realiza la validación del número de tarjeta de crédito que ingresa el usuario a un formulario. 
La validación de tarjeta se basa en el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),también llamado algoritmo de módulo 10, es un método de suma de verificación,
que se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.
En la siguiente imagen se muestran los pasos para el algoritmo de Luhn:

![gráfica algoritmo de Luhn](https://github.com/GenovevaCastro/DEV008-card-validation-veva/assets/131982616/0e4146ad-eb8d-488d-93f7-29f9021a37c4)
oritmo.jpg">)

## 2. Resumen

"Impresión y diseño Veva" es una tienda de comercio electrónico, que ofrece servicios de impresión en distintos formatos, así mismo ofrece servicios de publicidad y diseño. 
En este proyecto únicamente se mostrará la página final donde se realiza el pago de los servicios seleccionados al carrito del usuario. 
Con la única funcionalidad de validación de tarjeta.

* Se trabaja a base de un boilerplate, la estructura básica del proyecto se encuentra en distintas carpetas através de modulos en JS. 
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

La lógica del proyecto debe esta implementada completamente en JavaScript. 
En este proyecto NO se usan librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.
El documento ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como _code coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

### Descripción de scripts / archivos

* `src/index.html`: Este es el punto de entrada de la aplicación. Este archivo contiene el _markup_ (HTML), CSS y JavaScript.
* `src/style.css`: Este archivo contiene las reglas de estilo utilizadas para este proyecto.

```js
 * Alineación: centrada.
 * Tipografías: fantasy  &  geneva.
 * Fondo: de identidad corporativa de la empresa "Impresión y diseño Veva".
 * Imagen: representativa de los productos seleccionados al carrito de compras.
 * Opacidades: rgba(0, 0, 0, 0.359).
 * Paleta: rgb(0, 0, 0) - rgb(64, 44, 25) - rgb(142, 108, 58) - rgb(126, 93, 48) - rgb(255, 255, 255) - rgb(194, 12, 14)
 ```

![Gráfica paleta de colores](https://github.com/GenovevaCastro/DEV008-card-validation-veva/assets/131982616/5533a7be-d5b6-40b5-8ffc-78291a836a33)
 colores.jpg">)

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


**1. QUI PONER LAS FUNCIONES:**

* Insertar un numero (texto) que quiere validar.    
* Le oculta todos los dígitos del número de tarjeta a exepción de los últimos 4 caracteres.
* Una vez ingresado el número se ejecuta el algoritmo de Luhn. 
* Al usuario le aparece una alerta que anuncia si la tarjeta es valida o no.   
* Diseño amigable con el usuario. 


## 6. Tips.

### Prepara tu PC para trabajar

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [VS Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programa que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.app/)
   que incluye [Git bash](https://git-scm.com/download/win).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.

   **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

***
