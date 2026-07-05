// ================================
// AMBIENTAL KIDS 2.0
// SISTEMA GLOBAL DEL JUGADOR
// ================================

// Cargar jugador
let jugador = JSON.parse(localStorage.getItem("jugador"));

// Si no existe, crear nuevo
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

// ================================
// GUARDAR DATOS
// ================================
function guardarJugador() {
    localStorage.setItem("jugador", JSON.stringify(jugador));
}

// ================================
// SUMAR PUNTOS GLOBAL
// ================================
function sumarPuntos(cantidad) {

    jugador.puntos += cantidad;

    actualizarNivel();
    actualizarTitulo();

    guardarJugador();
}

// ================================
// COMPLETAR JUEGO
// ================================
function completarJuego() {

    jugador.juegosCompletados++;

    guardarJugador();
}

// ================================
// NIVEL (simple)
// ================================
function actualizarNivel() {

    jugador.nivel = Math.floor(jugador.puntos / 200) + 1;
}

// ================================
// TITULOS
// ================================
function actualizarTitulo() {

    if (jugador.puntos >= 10000) {
        jugador.titulo = "🌟 Maestro Ambiental";
    }
    else if (jugador.puntos >= 5000) {
        jugador.titulo = "👑 Leyenda Ambiental";
    }
    else if (jugador.puntos >= 1000) {
        jugador.titulo = "🌎 Experto del Planeta";
    }
    else if (jugador.puntos >= 500) {
        jugador.titulo = "🌎 Héroe Ambiental";
    }
    else if (jugador.puntos >= 250) {
        jugador.titulo = "🌳 Protector del Planeta";
    }
    else if (jugador.puntos >= 100) {
        jugador.titulo = "💧 Guardián del Agua";
    }
    else if (jugador.puntos >= 50) {
        jugador.titulo = "♻️ Reciclador Junior";
    }
    else {
        jugador.titulo = "🌱 Amigo de la Naturaleza";
    }
}
