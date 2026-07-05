// ================================
// AMBIENTAL KIDS 2.0
// Sistema del Jugador
// ================================

// Cargar jugador guardado
let jugador = JSON.parse(localStorage.getItem("jugador"));

// Si no existe, crear uno nuevo
if (!jugador) {

    jugador = {

        nombre: "Invitado",

        puntos: 0,

        titulo: "🌱 Amigo de la Naturaleza",

        juegosCompletados: 0,

        medallas: [],

        nivel: 1

    };

    guardarJugador();
}

// Guardar datos
function guardarJugador() {

    localStorage.setItem(
        "jugador",
        JSON.stringify(jugador)
    );

}
