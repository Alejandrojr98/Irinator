// Datos de los alumnos y sus respuestas
const redes = [
    {
        nombre: "Instagram",
        img: "insta.png",
        respuestas: {

            // Preguntas Generales
            activa: false,
            meta:true,
            mensajeria: true,
            compartir:true,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:false,
            videollamadas:true,
            comunidades:false,
            cifrado:true,

            // Preguntas Especificas
            reels:true,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Tiktok",
        img: "tiktok.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:false,
            mensajeria: true,
            compartir:true,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:true,
            microblogging:false,
            videollamadas:false,
            comunidades:false,
            cifrado:false,

            // Preguntas Especificas
            reels:false,
            videosVirales:true,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Facebook",
        img: "facebook.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:true,
            mensajeria: true,
            compartir:true,
            efimero:true,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:true,
            videollamadas:true,
            comunidades:false,
            cifrado:false,
            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:true
        }
    },

    {
        nombre: "Youtube",
        img: "youtube.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:false,
            mensajeria:false,
            compartir:true,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:true,
            microblogging:false,
            videollamadas:true,
            comunidades:false,
            cifrado:false,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:true,
            primera:false
        }
    },

    {
        nombre: "WhatsApp",
        img: "wasap.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:true,
            mensajeria: true,
            compartir:false,
            efimero:true,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:false,
            videollamadas:true,
            comunidades:true,
            cifrado:true,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:true,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Twitter",
        img: "twitter.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:false,
            mensajeria: true,
            compartir:true,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:true,
            videollamadas:false,
            comunidades:false,
            cifrado:false,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:true,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Twitch",
        img: "twitch.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:false,
            mensajeria: true,
            compartir:false,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:false,
            videollamadas:true,
            comunidades:false,
            cifrado:false,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:true,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Discord",
        img: "discord.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:false,
            mensajeria: true,
            compartir:false,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:false,
            videollamadas:true,
            comunidades:true,
            cifrado:false,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:true,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Telegram",
        img: "telegram.png",
        respuestas: {

            // Preguntas Generales
            activa: true,
            meta:false,
            mensajeria: true,
            compartir:true,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:true,
            videollamadas:true,
            comunidades:true,
            cifrado:true,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:false,
            stream:false,
            canales:false,
            botsCanales:true,
            creadores:false,
            primera:false
        }
    },

    {
        nombre: "Tuenti",
        img: "tuenti.png",
        respuestas: {

            // Preguntas Generales
            activa: false,
            meta:false,
            mensajeria: true,
            compartir:false,
            efimero:false,

            // Preguntas Intermedias
            videosCortor:false,
            microblogging:false,
            videollamadas:false,
            comunidades:false,
            cifrado:false,

            // Preguntas Especificas
            reels:false,
            videosVirales:false,
            comunities:false,
            microblog:false,
            dessaparecida:true,
            stream:false,
            canales:false,
            botsCanales:false,
            creadores:false,
            primera:false
        }
    },

];

// Las preguntas generales
const preguntasG = [
    {id: "activa", texto: '¿Está activa y es popular actualmente?'},
    {id: "meta", texto: '¿Es propiedad de Meta?'},
    {id: "mensajeria", texto: '¿Permite mensajería privada 1 a 1 o grupal?'},
    {id: "compartir", texto: '¿Está enfocada en compartir fotos o videos públicamente?'},
    {id: "efimero", texto: '¿Tiene funciones de contenido efímero (desaparece en 24h)?'},
];

const preguntasIm = [
    {id: "videosCortor", texto: '¿Ofrece videos cortos tipo Reels o Shorts?'},
    {id: "microblogging", texto: '¿Tiene funciones de microblogging (texto corto en posts o tweets)?'},
    {id: "videollamadas", texto: '¿Permite hacer videollamadas grupales?'},
    {id: "comunidades", texto: '¿Tiene servidores o canales para comunidades temáticas?'},
    {id: "cifrado", texto: '¿Ofrece cifrado de extremo a extremo para chats?'},
];

const preguntasE = [
    {id: "reels", texto: '¿Tiene una función llamada “Reels” para videos cortos?'},
    {id: "videosVirales", texto: '¿Es conocida principalmente por vídeos cortos con música y desafíos virales?'},
    {id: "comunities", texto: '¿Tiene una sección llamada “Communities” para subgrupos dentro de la app?'},
    {id: "microblog", texto: '¿Se usa principalmente para microblogging público y tweets cortos?'},
    {id: "dessaparecida", texto: '¿Fue muy popular en España en los 2000s y ha desaparecido como red social?'},
    {id: "stream", texto: '¿Es una plataforma de streaming en vivo centrada en videojuegos y cultura gamer?'},
    {id: "canales", texto: '¿Tiene servidores organizados en canales para comunidades de gamers y otros intereses?'},
    {id: "botsCanales", texto: '¿Permite enviar mensajes en canales públicos muy grandes y cuenta con bots?'},
    {id: "creadores", texto: '¿Su enfoque principal es el contenido audiovisual con gran base de creadores y monetización?'},
    {id: "primera", texto: '¿Fue la primera gran red social global con perfiles personales, muro y amigos?'},
];

const preguntas = [
    {preguntasG},
    {preguntasIm},
    {preguntasE},
]

// Lista de Redes Sociales

let redesRestantes = [...redes]; // copia alumnos

// Función para contar cuántas rrss responden true a una pregunta
function contarRedesConRespuestaTrue(redes, idPregunta) {
    return redes.filter(rede => rede.respuestas[idPregunta] === true).length;
}

// Función que ordena preguntas por número de alumnos con respuesta true
// function ordenarPreguntasPorNumeroRedesTrue(preguntas, redes) {
//     return preguntas.slice().sort((a, b) => {
//         return redes.filter(redes => rede.respuestas[b.id]).length
//             - redes.filter(redes => rede.respuestas[a.id]).length;
//     });
// }

function ordenarPreguntasPorNumeroRedesTrue(preguntas, redes) {
    return preguntas.slice().sort((a, b) => {
        return redes.filter(rede => rede.respuestas[b.id]).length
            - redes.filter(rede => rede.respuestas[a.id]).length;
    });
}


// Función para iniciar preguntas generales con primera pregunta aleatoria y resto ordenado
function iniciarPreguntasGenerales(preguntasG, redesRestantes) {
    const indiceAleatorio = Math.floor(Math.random() * preguntasG.length);
    const primeraPregunta = preguntasG[indiceAleatorio];
    const restoPreguntas = preguntasG.filter((_, i) => i !== indiceAleatorio);
    const preguntasOrdenadas = ordenarPreguntasPorNumeroRedesTrue(restoPreguntas, redesRestantes);
    return [primeraPregunta, ...preguntasOrdenadas];
}

// Después puedes llamar a:
let preguntasGeneralesRestantes = iniciarPreguntasGenerales(preguntasG, redesRestantes);

let preguntasIntermediasRestantes = ordenarPreguntasPorNumeroRedesTrue(preguntasIm, redesRestantes);
let preguntasEspecificasRestantes = ordenarPreguntasPorNumeroRedesTrue(preguntasE, redesRestantes);

let etapaActual = "generales";
let restoPreguntas = [...preguntasGeneralesRestantes];
let preguntaActual = null;

// Mostrar sección preguntas y botones
function mostrarSeccionPreguntas() {
    document.getElementById("questionText").style.display = "block";
    document.querySelector(".answers").style.display = "block";
    document.getElementById("redAcertada").style.display = "none";
    document.getElementById("redNoAcertada").style.display = "none";
    document.getElementById("btnYes").style.display = "inline-block";
    document.getElementById("btnNo").style.display = "inline-block";
}

// Mostrar siguiente pregunta
function mostrarSiguientePregunta() {

    irinaPensando = false; // Ya no está pensando, vuelve el modo emocional normal

    if (restoPreguntas.length === 0) {
        actualizarEtapa();
        if (restoPreguntas.length === 0) {
            // No quedan preguntas ni alumnos para continuar
            console.log("No quedan preguntas ni redes para continuar.");
            return;
        }
    }
    preguntaActual = restoPreguntas.shift();
    document.getElementById("questionText").textContent = preguntaActual.texto;
    mostrarSeccionPreguntas();
}

function mostrarSiguientePreguntaEspecifica() {

    irinaPensando = true; // Pensando, vuelve el modo emocional normal
    cambiarImagenIrina("irinapensando.png");

    if (restoPreguntas.length === 0) {
        actualizarEtapa();
        if (restoPreguntas.length === 0) {
            // No quedan preguntas ni alumnos para continuar
            console.log("No quedan preguntas ni redes para continuar.");
            return;
        }
    }
    preguntaActual = restoPreguntas.shift();
    document.getElementById("questionText").textContent = preguntaActual.texto;
    mostrarSeccionPreguntas();
}

// Actualizar etapa según número de redes restantes
function actualizarEtapa() {
    if (redesRestantes.length === 1) {
        etapaActual = "final";
        restoPreguntas = [];
        intentoFinalAdivinar();
    } else if (redesRestantes.length <= 3) {
        if (etapaActual !== "especificas") {
            etapaActual = "especificas";
            preguntasEspecificasRestantes = ordenarPreguntasPorNumeroRedesTrue(preguntasE, redesRestantes);
            restoPreguntas = [...preguntasEspecificasRestantes];

            // Irina está pensando

            primerIntentoAdivinar();
        }
    } else if (redesRestantes.length <= 7) {
        if (etapaActual !== "intermedias") {
            etapaActual = "intermedias";
            preguntasIntermediasRestantes = ordenarPreguntasPorNumeroRedesTrue(preguntasIm, redesRestantes);
            restoPreguntas = [...preguntasIntermediasRestantes];
        }
    } else {
        if (etapaActual !== "generales") {
            etapaActual = "generales";
            preguntasGeneralesRestantes = iniciarPreguntasGenerales(preguntasG, redesRestantes);
            restoPreguntas = [...preguntasGeneralesRestantes];
        }
    }
    console.log("Etapa actual:", etapaActual);
}

// Filtrar alumnos por respuesta del usuario
function filtrarRedesPorRespuesta(respuestaUsuario) {
    redesRestantes = redesRestantes.filter(rede => rede.respuestas[preguntaActual.id] === respuestaUsuario);
    console.log("Redes restantes tras filtrar:", redesRestantes.map(a => a.nombre));
    actualizarEtapa();
}

let primerIntentoHecho = false;  // para controlar si ya hicimos el primer intento de adivinar

let estadoIrina = 0; // Contador de estado emocional (-2 a +2)
let irinaPensando = false; // Indica si Irina está pensando

function cambiarImagenIrina(nombreArchivo) {
    const imagenIrina = document.getElementById("imagenIrina");
    if (imagenIrina) {
        imagenIrina.src = `img/${nombreArchivo}`;
        console.log(`Imagen cambiada a: img/${nombreArchivo}`);
    }
}

// Procesar respuesta del usuario (sí/no)
function procesarRespuesta(respuestaUsuario) {
    filtrarRedesPorRespuesta(respuestaUsuario);
    actualizarEtapa();

    // --- Control de emociones de Irina (solo si no está pensando) ---
    if (!irinaPensando && redesRestantes.length > 1) {
        if (respuestaUsuario === true) {
            estadoIrina++;
        } else {
            estadoIrina--;
        }

        // Limitar el rango entre -2 y 2
        if (estadoIrina > 2) estadoIrina = 2;
        if (estadoIrina < -2) estadoIrina = -2;

        // Cambiar la imagen según el estado
        if (estadoIrina >= 2) {
            cambiarImagenIrina("irinamuyfeliz.png");
        } else if (estadoIrina >= 0) {
            cambiarImagenIrina("irinaneutra.png");
        } else if (estadoIrina === -1) {
            cambiarImagenIrina("irinaenfadada.png");
        } else if (estadoIrina <= -2) {
            cambiarImagenIrina("irinamuyenfadada.png");
        }
    }
    // --- Fin del control de emociones ---


    if (etapaActual === "especificas") {
        if (!primerIntentoHecho && redesRestantes.length <= 3 && redesRestantes.length > 1) {
            // Primer intento de adivinar solo UNA vez cuando quedan entre 2 y 3 alumnos
            primerIntentoHecho = true;
            mostrarIntentoAdivinar();
        } else if (redesRestantes.length === 1) {
            // Intento final sin opción a no
            mostrarIntentoFinal();
        } else {
            // Mostrar siguiente pregunta específica si quedan
            if (restoPreguntas.length > 0) {
                mostrarSiguientePregunta();
            }
        }
    } else {
        if (restoPreguntas.length > 0) {
            mostrarSiguientePregunta();
        }
    }
}


// Mostrar intento de adivinar alumno (con opciones sí/no)
// function mostrarIntentoAdivinar() {
//
//     irinaPensando = true;
//     cambiarImagenIrina("irinapensando.png");
//
//     const redAdivinada = redesRestantes[0];
//
//     // Ocultar pregunta y botones
//     document.getElementById("questionText").style.display = "none";
//     document.querySelector(".answers").style.display = "none";
//
//     // Mostrar imagen
//     const imagenElemento = document.getElementById("imagenPersonaIntentoAcertada");
//     imagenElemento.src = `img/${personaAdivinada.img}`;
//     imagenElemento.alt = `Foto de ${personaAdivinada.nombre}`;
//
//     // Mostrar el cuadro de intento
//     document.getElementById("redAcertada").style.display = "block";
//     document.getElementById("redNoAcertada").style.display = "none";
//
//     // Ocultar botones de sí/no de pregunta mientras se adivina
//     document.getElementById("btnYes").style.display = "none";
//     document.getElementById("btnNo").style.display = "none";
// }

function mostrarIntentoAdivinar() {

    const redAdivinada = redesRestantes[0];

    if (redAdivinada.nombre==="Instagram"){
        cambiarImagenIrina("insta.png");
    }else if (redAdivinada.nombre==="Tiktok"){
        cambiarImagenIrina("tiktok.png");
    }else if (redAdivinada.nombre==="Facebook"){
        cambiarImagenIrina("facebook.png");
    }else if (redAdivinada.nombre==="Youtube"){
        cambiarImagenIrina("youtube.png");
    }else if (redAdivinada.nombre==="WhatsApp"){
        cambiarImagenIrina("wasap.png");
    }else if (redAdivinada.nombre==="Twitter"){
        cambiarImagenIrina("twitter.png");
    }else if (redAdivinada.nombre==="Twitch"){
        cambiarImagenIrina("twitch.png");
    }else if (redAdivinada.nombre==="Discord"){
        cambiarImagenIrina("discord.png");
    }else if (redAdivinada.nombre==="Telegram"){
        cambiarImagenIrina("telegram.png");
    }else{
        cambiarImagenIrina("tuenti.png");
    }

    document.getElementById("questionText").style.display = "none";
    document.querySelector(".answers").style.display = "none";

    document.getElementById("redAcertada").style.display = "block";
    document.getElementById("redNoAcertada").style.display = "none";

    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNo").style.display = "none";
}


// function intentoFinalAdivinar() {
//
//     // Irina deja de pensar y se pone muy feliz
//     irinaPensando = false;
//     estadoIrina = 2; // marcamos que está en el estado más feliz
//     cambiarImagenIrina("irinamuyfeliz.png");
//
//     const redFinal = redesRestantes[0];
//
//     // Ocultar preguntas y botones
//     document.getElementById("questionText").style.display = "none";
//     document.getElementById("btnYes").style.display = "none";
//     document.getElementById("btnNo").style.display = "none";
//
//     // Mostrar imagen del alumno final
//     const imagenElemento = document.getElementById("imagenPersonaIntentoAcertada");
//     if (imagenElemento) {
//         imagenElemento.src = `img/${personaFinal.img}`;
//         imagenElemento.alt = `Foto de ${personaFinal.nombre}`;
//     }
//
//     // Mostrar el bloque del intento
//     const acertadaDiv = document.getElementById("personaAcertada");
//     const noAcertadaDiv = document.getElementById("personaNoAcertada");
//
//     noAcertadaDiv.style.display = "none";
//     acertadaDiv.style.display = "block";
//
//     // Asegurarse de ocultar el botón "No"
//     const btnNoAcertado = document.getElementById("btnNoAcertado");
//     if (btnNoAcertado) btnNoAcertado.style.display = "none";
// }


function intentoFinalAdivinar() {

    const redAdivinadaFinal = redesRestantes[0];

    if (redAdivinadaFinal.nombre==="Instagram"){
        cambiarImagenIrina("insta.png");
    }else if (redAdivinadaFinal.nombre==="Tiktok"){
        cambiarImagenIrina("tiktok.png");
    }else if (redAdivinadaFinal.nombre==="Facebook"){
        cambiarImagenIrina("facebook.png");
    }else if (redAdivinadaFinal.nombre==="Youtube"){
        cambiarImagenIrina("youtube.png");
    }else if (redAdivinadaFinal.nombre==="WhatsApp"){
        cambiarImagenIrina("wasap.png");
    }else if (redAdivinadaFinal.nombre==="Twitter"){
        cambiarImagenIrina("twitter.png");
    }else if (redAdivinadaFinal.nombre==="Twitch"){
        cambiarImagenIrina("twitch.png");
    }else if (redAdivinadaFinal.nombre==="Discord"){
        cambiarImagenIrina("discord.png");
    }else if (redAdivinadaFinal.nombre==="Telegram"){
        cambiarImagenIrina("telegram.png");
    }else{
        cambiarImagenIrina("tuenti.png");
    }


    document.getElementById("questionText").style.display = "none";
    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNo").style.display = "none";



    const acertadaDiv = document.getElementById("redAcertada");
    const noAcertadaDiv = document.getElementById("redNoAcertada");

    noAcertadaDiv.style.display = "none";
    acertadaDiv.style.display = "block";

    const btnNoAcertado = document.getElementById("btnNoAcertado");
    if (btnNoAcertado) btnNoAcertado.style.display = "none";
}


// Primer intento de adivinar al entrar en etapa específicas
function primerIntentoAdivinar() {
    console.log("Primer intento de adivinar");
    mostrarIntentoAdivinar();
}

// Eventos para botones
document.getElementById("btnYes").addEventListener("click", () => procesarRespuesta(true));
document.getElementById("btnNo").addEventListener("click", () => procesarRespuesta(false));

document.getElementById("btnAcertado").addEventListener("click", () => {
    window.location.href = "redAcertada";
});

// document.getElementById("btnNoAcertado").addEventListener("click", () => {
//     // Oculta la sección de intento de adivinar
//     document.getElementById("redAcertada").style.display = "none";
//     document.getElementById("redNoAcertada").style.display = "none";
//
//     // Volvemos a mostrar la sección de preguntas
//     document.getElementById("questionText").style.display = "block";
//     document.getElementById("btnYes").style.display = "inline-block";
//     document.getElementById("btnNo").style.display = "inline-block";
//
//     // Solo preguntas específicas filtradas para alumnos restantes que puedan responder true
//     preguntasEspecificasRestantes = ordenarPreguntasPorNumeroRedesTrue(
//         preguntasE.filter(p => redesRestantes.some(a => a.respuestas[r.id] === true)),
//         redesRestantes
//     );
//     restoPreguntas = preguntasEspecificasRestantes;
//
//     mostrarSiguientePregunta();
// });

document.getElementById("btnNoAcertado").addEventListener("click", () => {
    document.getElementById("redAcertada").style.display = "none";
    document.getElementById("redNoAcertada").style.display = "none";

    document.getElementById("questionText").style.display = "block";
    document.getElementById("btnYes").style.display = "inline-block";
    document.getElementById("btnNo").style.display = "inline-block";

    preguntasEspecificasRestantes = ordenarPreguntasPorNumeroRedesTrue(
        preguntasE.filter(p => redesRestantes.some(a => a.respuestas[p.id] === true)),
        redesRestantes
    );
    restoPreguntas = preguntasEspecificasRestantes;


    mostrarSiguientePreguntaEspecifica();
});


document.getElementById("btnSeguirIntentando").addEventListener("click", () => {
    document.getElementById("redNoAcertada").style.display = "none";
    mostrarSeccionPreguntas();
    mostrarSiguientePregunta();
});

document.getElementById("btnFinalizarJuego").addEventListener("click", () => {
    window.location.href = "index";
});

function mostrarIntentoFinal() {
    const redFinal = redesRestantes[0];

    // Ocultar preguntas y botones normales
    document.getElementById("questionText").style.display = "none";
    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNo").style.display = "none";

    // Mostrar imagen
    const imagenElemento = document.getElementById("imagenPersonaIntentoAcertada");
    imagenElemento.src = `img/${personaFinal.img}`;
    imagenElemento.alt = `Foto de ${personaFinal.nombre}`;

    // Mostrar el cuadro de intento
    const acertadaDiv = document.getElementById("redAcertada");
    const noAcertadaDiv = document.getElementById("redNoAcertada");
    noAcertadaDiv.style.display = "none";
    acertadaDiv.style.display = "block";

    // Ocultar el botón de NO (solo hay una opción)
    document.getElementById("btnNoAcertado").style.display = "none";
}

// Inicio del juego mostrando la primera pregunta
mostrarSiguientePregunta();










