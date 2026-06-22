// Funcionalidad Reservar lugar
const botonesReserva = document.querySelectorAll(".btnReservar");
const mensaje = document.getElementById("mensaje");

botonesReserva.forEach(boton => {
    boton.addEventListener("click", () => {
        mensaje.innerHTML = "<p>✅ Reserva realizada correctamente</p>";
    });
});

// Funcionalidad Mostrar categorías
const categorias = ["Conciertos", "Ferias", "Deportes"];

document.getElementById("btnCategorias").addEventListener("click", () => {

    let html = "<h3>Categorías disponibles:</h3><ul>";

    categorias.forEach(categoria => {
        html += `<li>${categoria}</li>`;
    });

    html += "</ul>";

    document.getElementById("categorias").innerHTML = html;
});