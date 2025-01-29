document.getElementById('start-button').addEventListener('click', function () {
    window.location.href = 'over.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const sky = document.getElementById('sky');
    const numStars = 200; // Puedes ajustar el número de estrellas según desees

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Posicionar estrellas aleatoriamente en toda la pantalla
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Cambiar tamaño y opacidad para un efecto más realista
        star.style.width = `${Math.random() * 3}px`; // Estrellas de entre 1px y 3px
        star.style.height = star.style.width; // Hacer que el alto y ancho sean iguales
        star.style.opacity = Math.random(); // Estrellas con diferentes niveles de opacidad

        sky.appendChild(star);
    }
});
