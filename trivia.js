const preguntas = [
    {
        pregunta: "¿Cómo nos conocimos?",
        opciones: ["Icebox", "En Split", "Ascent"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es nuestra canción favorita?",
        opciones: ["Mil maneras de morir 3am", "Save Your Tears - The Weeknd", "One Dance - Drake"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuántos hijos queremos tener?",
        opciones: ["1", "2", "Max 2"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es mejor en Valorant?",
        opciones: ["Gaby Jett", "Gaby KJ", "Todas"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es la comida favorita de Javier?",
        opciones: ["Restaurante Italiano", "Restaurante de Sushi", "Comida rápida"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién es la mujer más hermosa del mundo?",
        opciones: ["Tú", "Tú", "Tú"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué película vimos por primera vez?",
        opciones: ["Una de Terror", "Una Romántica", "Acción"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Javier con qué PJ es bueno?",
        opciones: ["Todos", "Raze", "Chamber"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el color favorito de Javier?",
        opciones: ["Rojo", "Azul", "Verde"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué animal de mascota queremos tener?",
        opciones: ["Perro", "Gato", "Pájaro"],
        respuestaCorrecta: 0
    },
    // Nuevas preguntas agregadas
    {
        pregunta: "¿Cuál es el primer videojuego que jugamos juntos?",
        opciones: ["Fortnite", "Minecraft", "Valorant"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál es la película que más nos gusta?",
        opciones: ["rapunzel", "entrenar a tu dragon", "las 2"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿de quien son esos ojitos tuyos?",
        opciones: ["Mrio Bros", "javier Ayerdi", "el cuco"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿quieres estar conmigo siempre?",
        opciones: ["si", "no", "no se"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el deporte favorito de Javier?",
        opciones: ["Fútbol", "Basquetbol", "Voleibol"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿quien es la consentida de Javier?",
        opciones: ["La pc", "Gaby", "Chiltepe"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿cuantas vidas quieres estar conmigo?",
        opciones: ["todas", "1", "no existen"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué tipo de película prefieres ver con Javier?",
        opciones: ["amor", "terror", "Tambas"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿quieres ser mi compañera de vida para siempre?",
        opciones: ["acepto", "no", "ewwww"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Me das tu mano ahorita mismo?",
        opciones: ["si", "encantada", "paso"],
        respuestaCorrecta: 1
    }
];

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
    const preguntaDiv = document.getElementById("pregunta");
    const opcionesDiv = document.getElementById("opciones");
    const pregunta = preguntas[preguntaActual];
    
    preguntaDiv.textContent = pregunta.pregunta;
    opcionesDiv.innerHTML = "";
    
    pregunta.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.onclick = () => verificarRespuesta(index);
        opcionesDiv.appendChild(boton);
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[preguntaActual];
    if (opcionSeleccionada === pregunta.respuestaCorrecta) {
        alert("¡Correcto! 😊");
        puntaje++;
    } else {
        alert("¡Incorrecto! 😢");
    }
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const preguntaDiv = document.getElementById("pregunta");
    const opcionesDiv = document.getElementById("opciones");
    preguntaDiv.textContent = "¡Fin de la trivia!";
    opcionesDiv.innerHTML = `Tu puntaje final es: ${puntaje} de ${preguntas.length}`;
}

function irA(pagina) {
    window.location.href = pagina;
}

mostrarPregunta();
