import validator from './validator.js';

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    //var nombre = document.getElementById("nombre").value;
    var tarjeta = document.getElementById("tarjeta").value;
    //var cvv = document.getElementById("cvv").value;
    mostrarAlerta(validator.validarTarjeta(tarjeta));

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

