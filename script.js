/* =====================================================
   GABRIEL.EXE
   SISTEMA PRINCIPAL
===================================================== */


/* =====================================================
   CAMBIAR ENTRE PANTALLAS
===================================================== */

function mostrarPantalla(nombre) {

    const archivo = document.getElementById("archivo");
    const inicio = document.getElementById("inicio");

    const pantallas = document.querySelectorAll(".pantalla");

    inicio.classList.add("oculto");
    archivo.classList.add("oculto");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.add("oculto");
    });

    const pantallaSeleccionada =
        document.getElementById(nombre);

    if (pantallaSeleccionada) {
        pantallaSeleccionada.classList.remove("oculto");
        window.scrollTo(0, 0);
    }
}


/* =====================================================
   ABRIR ARCHIVO PRINCIPAL
===================================================== */

function abrirArchivo() {

    const inicio = document.getElementById("inicio");
    const archivo = document.getElementById("archivo");

    if (inicio) {
        inicio.classList.add("oculto");
    }

    if (archivo) {
        archivo.classList.remove("oculto");
    }

    window.scrollTo(0, 0);
}


/* =====================================================
   VOLVER AL ARCHIVO PRINCIPAL
===================================================== */

function volverArchivo() {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.add("oculto");
    });

    const secreto = document.getElementById("secreto");

    if (secreto) {
        secreto.classList.add("oculto");
    }

    const archivo = document.getElementById("archivo");

    if (archivo) {
        archivo.classList.remove("oculto");
    }

    window.scrollTo(0, 0);
}


/* =====================================================
   ARCHIVO 005
   CONTRASEÑA: Harry Potter
===================================================== */

function abrirSecreto() {

    const campoClave = document.getElementById("clave");
    const mensaje = document.getElementById("mensajeSecreto");
    const carta = document.getElementById("cartaSecreta");

    if (!campoClave || !mensaje || !carta) {
        return;
    }

    const contraseña = campoClave.value.trim();

    if (contraseña.toLowerCase() === "harry potter") {

        mensaje.textContent =
            "ACCESO CONCEDIDO · ARCHIVO DESBLOQUEADO";

        mensaje.style.color = "#b99a5a";

        carta.classList.remove("oculto");

        campoClave.style.display = "none";

        const boton = campoClave.nextElementSibling;

        if (boton) {
            boton.style.display = "none";
        }

        setTimeout(function() {

            carta.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    } else {

        mensaje.textContent =
            "ACCESO DENEGADO · ESA NO ES LA CONTRASEÑA";

        mensaje.style.color = "#a95d55";

        campoClave.value = "";

        campoClave.focus();
    }
}


/* =====================================================
   NUESTRA CANCIÓN
===================================================== */

function alternarMusica() {

    const audio = document.getElementById("nuestraCancion");
    const boton = document.getElementById("botonMusica");
    const vinilo = document.getElementById("viniloMusica");

    if (!audio || !boton || !vinilo) {
        return;
    }


    /* -------------------------------------------------
       SI ESTÁ SONANDO → PAUSAR
    ------------------------------------------------- */

    if (!audio.paused) {

        audio.pause();

        vinilo.classList.remove("vinilo-girando");

        boton.textContent = "▶ REPRODUCIR";

        return;
    }


    /* -------------------------------------------------
       INTENTAR REPRODUCIR
    ------------------------------------------------- */

    audio.play()
        .then(function() {

            vinilo.classList.add("vinilo-girando");

            boton.textContent = "Ⅱ PAUSAR";

        })
        .catch(function(error) {

            console.error(
                "No se pudo reproducir el audio:",
                error
            );

            vinilo.classList.remove("vinilo-girando");

            boton.textContent = "⚠ NO SE PUDO REPRODUCIR";

        });
}


/* =====================================================
   DETENER ANIMACIÓN CUANDO TERMINA LA CANCIÓN
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const audio = document.getElementById("nuestraCancion");
    const boton = document.getElementById("botonMusica");
    const vinilo = document.getElementById("viniloMusica");

    if (!audio) {
        return;
    }

    audio.addEventListener("ended", function() {

        if (vinilo) {
            vinilo.classList.remove("vinilo-girando");
        }

        if (boton) {
            boton.textContent = "▶ REPRODUCIR";
        }

    });

});