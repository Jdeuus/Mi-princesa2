const canvas = document.getElementById("laberinto");
const ctx = canvas.getContext("2d");

// Crear un laberinto ajustado y con camino libre
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2],  // 2 es el objetivo (Flynn)
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Redefinir la posición inicial de Rapunzel y Flynn
let rapunzel = { x: 1, y: 1, img: new Image() };
let flynn = { x: 17, y: 8, img: new Image() };
let corazones = 0;  // Contador de corazones

// Cargar las imágenes
rapunzel.img.src = "rapunzel.png";  // Imagen de Rapunzel
flynn.img.src = "flynn.png";        // Imagen de Flynn

// Crear una función para generar los corazones
function generateHearts() {
    const hearts = [
        { x: 4, y: 1 },
        { x: 6, y: 3 },
        { x: 8, y: 6 },
        { x: 10, y: 4 },
        { x: 12, y: 2 }
    ];

    // Coloca los corazones en el laberinto
    hearts.forEach(heart => {
        maze[heart.y][heart.x] = 3; // Marca la casilla con un corazón
    });
}

// Función para dibujar el laberinto y los personajes
function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const size = canvas.width / 18;  // Ajustamos el tamaño de las celdas para el laberinto centrado
    
    // Dibujar el laberinto
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 1) {
                ctx.fillStyle = "black";
                ctx.fillRect(x * size, y * size, size, size);
            } else if (maze[y][x] === 2) {
                ctx.fillStyle = "red"; // Objetivo (Flynn)
                ctx.fillRect(x * size, y * size, size, size);
            } else if (maze[y][x] === 3) {
                ctx.fillStyle = "pink"; // Corazones
                ctx.beginPath();
                ctx.arc(x * size + size / 2, y * size + size / 2, size / 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    // Dibujar a Rapunzel
    ctx.drawImage(rapunzel.img, rapunzel.x * size, rapunzel.y * size, size, size);

    // Dibujar a Flynn (objetivo)
    ctx.drawImage(flynn.img, flynn.x * size, flynn.y * size, size, size);

    // Mostrar el contador de corazones
    ctx.fillStyle = "withe";
    ctx.font = "20px PixelFont";
    ctx.fillText("Corazones: " + corazones, canvas.width - 150, 30);
}

// Función para mover a Rapunzel
function moveRapunzel(direction) {
    let newX = rapunzel.x;
    let newY = rapunzel.y;
    
    if (direction === "up") newY--;
    if (direction === "down") newY++;
    if (direction === "left") newX--;
    if (direction === "right") newX++;

    // Si no hay pared, mueve a Rapunzel
    if (maze[newY] && maze[newY][newX] !== 1) {
        rapunzel.x = newX;
        rapunzel.y = newY;
    }
}

// Función para recolectar corazones
function collectHeart() {
    if (maze[rapunzel.y][rapunzel.x] === 3) {
        corazones++;
        maze[rapunzel.y][rapunzel.x] = 0;  // Eliminar el corazón una vez que lo recoja
    }
}

// Verificar si Rapunzel encontró a Flynn
function checkWin() {
    if (rapunzel.x === flynn.x && rapunzel.y === flynn.y) {
        setTimeout(() => {
            alert("¡Rapunzel ha encontrado a Flynn! ❤️");
            restartGame();
        }, 500);
    }
}

// Función para reiniciar el juego
function restartGame() {
    rapunzel.x = 1;
    rapunzel.y = 1;
    corazones = 0;
    maze[8][17] = 2;  // Volver a colocar a Flynn en su lugar
    generateHearts();  // Regenerar los corazones
    drawMaze();
}

// Evento de teclas para mover a Rapunzel
document.addEventListener("keydown", (e) => {
    if (e.key === "w") moveRapunzel("up");
    if (e.key === "s") moveRapunzel("down");
    if (e.key === "a") moveRapunzel("left");
    if (e.key === "d") moveRapunzel("right");

    collectHeart();  // Recolectar corazones
    drawMaze();
    checkWin();  // Verificar si encontró a Flynn
});

// Inicializar el laberinto
rapunzel.img.onload = () => {
    flynn.img.onload = () => {
        generateHearts();  // Generar los corazones al inicio
        drawMaze();  // Dibuja el laberinto después de cargar las imágenes
    };
};

// Funciones de control de música
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
