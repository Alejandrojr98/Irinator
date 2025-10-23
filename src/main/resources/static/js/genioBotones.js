// js/genio-botones.js
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.button-container button');
    const imgPrincipal = document.querySelector('.left-box img'); // imagen neutra inicial

    botones.forEach(btn => {
        btn.addEventListener('mouseenter', e => {
            const texto = e.target.textContent.trim().toLowerCase();

            if (texto.includes('personas')) {
                imgPrincipal.src = 'img/irinarriba.png'; // al pasar por Personas
            } else if (texto.includes('animales')) {
                imgPrincipal.src = 'img/irinarriba.png'; // al pasar por Animales o Animales Prueba
            } else if (texto.includes('maravillas')) {
                imgPrincipal.src = 'img/irinabajo.png';
            } else {
                imgPrincipal.src = 'img/irinabajo.png';
            }
        });

        btn.addEventListener('mouseleave', () => {
            imgPrincipal.src = 'img/irinaneutra.png'; // vuelve a neutra
        });
    });
});
