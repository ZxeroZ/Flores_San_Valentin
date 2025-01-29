onload = () => {
    document.body.classList.remove("container");
};

// Esperar a que cargue la página
window.addEventListener('DOMContentLoaded', () => {
    let audio = document.getElementById('miAudio');

    // Ajustar volumen al 50%
    audio.volume = 0.5;

    // Reproducir automáticamente (algunas políticas de los navegadores requieren interacción)
    audio.play().catch(error => {
        console.log("Reproducción automática bloqueada. Se requiere interacción del usuario.");
    });
});


// Espera a que se cargue toda la página
window.addEventListener('load', () => {
    setTimeout(() => {
        // Selecciona el div y cambia su visibilidad
        const mensaje = document.querySelector('.mensaje-absolute');
        mensaje.style.opacity = 1;
        mensaje.style.visibility = 'visible';
    }, 3000); // 10000 milisegundos = 10 segundos
});



// Espera a que la página cargue
window.addEventListener('load', () => {
    // Muestra el div después de 10 segundos
    setTimeout(() => {
        const mensaje = document.getElementById('mensajeDiv');
        mensaje.style.opacity = 1;
        mensaje.style.visibility = 'visible';
    }, 10000); // 10 segundos

    // Obtener elementos
    const closeBtn = document.getElementById('closeBtn');
    const showBtn = document.getElementById('showBtn');
    const mensaje = document.getElementById('mensajeDiv');

    // Función para cerrar el div cuando se hace clic en la X
    closeBtn.addEventListener('click', () => {
        mensaje.style.opacity = 0;
        mensaje.style.visibility = 'hidden';
        showBtn.style.display = 'block'; // Mostrar el botón "Mostrar"
    });

    // Función para mostrar el div cuando se hace clic en el botón
    showBtn.addEventListener('click', () => {
        mensaje.style.opacity = 1;
        mensaje.style.visibility = 'visible';
        showBtn.style.display = 'none'; // Ocultar el botón "Mostrar"
    });
});

