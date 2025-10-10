document.body.addEventListener('click', function (e) {
    const target = e.target;

    // ✅ Aprobar sugerencia
    if (target.classList.contains('aprobar-btn')) {
        const fila = target.closest('tr');
        const estadoCelda = fila.querySelector('.estado');

        // Cambiar texto y estilo
        estadoCelda.textContent = 'Aprobado';
        fila.classList.add('aprobado');

        // Quitar el botón de aprobar
        target.remove();
    }

    // // ❌ Eliminar sugerencia
    // if (target.classList.contains('eliminar-btn')) {
    //     const fila = target.closest('tr');
    //     fila.remove();
    // }
});

