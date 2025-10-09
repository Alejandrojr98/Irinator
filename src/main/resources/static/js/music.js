document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");

    // Configuramos volumen medio-alto
    music.volume = 0.9;
    music.loop = true; // para que se repita
    music.autoplay = true;

    // Intentamos reproducir automáticamente
    music.play().catch(err => {
        console.log("Autoplay bloqueado, esperando click del usuario:", err);
        // Si el autoplay falla, reproducimos al primer click
        function startMusic() {
            music.play();
            document.removeEventListener("click", startMusic);
        }
        document.addEventListener("click", startMusic);
    });
});
