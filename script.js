// Funcionalidad 1: Reservar lugar
const btnReservar = document.getElementById("btnReservar");
const mensaje = document.getElementById("mensaje");

btnReservar.addEventListener("click", function () {
    mensaje.textContent = "✅ Reserva realizada correctamente";
});