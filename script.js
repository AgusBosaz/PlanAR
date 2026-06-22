// Funcionalidad 1: Reservar lugar
const btnReservar = document.getElementById("btnReservar");
const mensaje = document.getElementById("mensaje");

btnReservar.addEventListener("click", function () {
    mensaje.textContent = "✅ Reserva realizada correctamente";
});

// Funcionalidad 2: Mostrar categorías
const btnCategorias = document.getElementById("btnCategorias");
const contenedorCategorias = document.getElementById("categorias");

const categorias = ["Conciertos", "Ferias", "Deportes"];

btnCategorias.addEventListener("click", function () {

    contenedorCategorias.innerHTML = "";

    categorias.forEach(function (categoria) {
        const elemento = document.createElement("p");
        elemento.textContent = categoria;
        contenedorCategorias.appendChild(elemento);
    });

});