// Función para iniciar la música automáticamente al cargar la página
window.onload = () => {
    const music = document.getElementById("music");
    music.play(); // Inicia la música automáticamente
};

let paginaActual = 1; // Comienza en la página 1

// Función para cambiar de página en la historia
function mostrarSiguientePagina() {
    // Ocultar la página actual
    document.getElementById(`pagina${paginaActual}`).style.display = 'none';
    
    // Incrementar el número de la página
    paginaActual++;

    // Mostrar la siguiente página, si existe
    if (paginaActual <= 10) { // Ahora tenemos 10 páginas
        document.getElementById(`pagina${paginaActual}`).style.display = 'block';
    } else {
        // Si no hay más páginas, oculta el botón
        document.querySelector('button').style.display = 'none';
    }
}

// Función para cambiar de página
function irA(pagina) {
    window.location.href = pagina;
}

// Función para controlar la música
function toggleMusic() {
    const music = document.getElementById("music");
    if (music.paused) {
        music.play(); // Reproducir
    } else {
        music.pause(); // Pausar
    }
}

function bajarVolumen() {
    const music = document.getElementById("music");
    music.volume = Math.max(0, music.volume - 0.1); // Baja el volumen
}

function subirVolumen() {
    const music = document.getElementById("music");
    music.volume = Math.min(1, music.volume + 0.1); // Sube el volumen
}

function mutear() {
    const music = document.getElementById("music");
    music.muted = !music.muted; // Alterna el mute
}

// Función para iniciar la música en el sitio de la galería automáticamente
window.onload = () => {
    const music = document.getElementById("music");
    music.play(); // Inicia la música automáticamente
};

// Función para controlar la música en la galería
function toggleMusic() {
    const music = document.getElementById("music");
    if (music.paused) {
        music.play(); // Reproducir
    } else {
        music.pause(); // Pausar
    }
}

function bajarVolumen() {
    const music = document.getElementById("music");
    music.volume = Math.max(0, music.volume - 0.1); // Baja el volumen
}

function subirVolumen() {
    const music = document.getElementById("music");
    music.volume = Math.min(1, music.volume + 0.1); // Sube el volumen
}

function mutear() {
    const music = document.getElementById("music");
    music.muted = !music.muted; // Alterna el mute
}
