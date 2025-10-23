// Datos de los alumnos y sus respuestas
const alumnos = [
    {
        nombre: "Claudia",
        img: "claudia.png",
        respuestas: {

            // Preguntas Generales
            septum: false,
            gafas:true,
            energetica: true,
            cafe:true,
            alto:false,
            tatuajes: true,
            nacer: false,
            bolso:true,
            tomelloso: true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:true,
            feliz:false,
            cTodo:true,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:true,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:true,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,

        }
    },
    {
        nombre: "Alejandro",
        img: "alejandro.png",

        respuestas: {
            // Preguntas Generales
            septum: false,
            gafas: true,
            energetica: false,
            cafe: false,
            alto:true,
            tatuajes: false,
            nacer: true,
            bolso: false,
            tomelloso: true,

            // Preguntas Intermedias
            arregla:true,
            comenta:true,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:true,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:true,

            // Preguntas Especificas
            random:false,
            bocadillo:true,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },
    {
        nombre: "Carlos",
        img: "carlos.png",
        respuestas: {
            // Preguntas Generales
            septum: false,
            gafas: false,
            energetica:true,
            cafe: false,
            alto:false,
            tatuajes: true,
            nacer:true,
            bolso: true,
            tomelloso: false,

            // Preguntas Intermedias
            arregla:false,
            comenta:true,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:true,
            dormido:false,
            respTodo:false,
            calla:true,
            ocupado:true,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:true,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },
    {
        nombre: "Ángeles",
        img: "angeles.png",
        respuestas: {
            // Preguntas Generales
            septum:false,
            gafas:false,
            energetica:false,
            cafe:false,
            alto:false,
            tatuajes:true,
            nacer:false,
            bolso:true,
            tomelloso:false,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:true,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:true,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },
    {
        nombre: "Ana",
        img: "ana.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:false,
            energetica:true,
            cafe:true,
            alto:true,
            tatuajes:false,
            nacer:false,
            bolso:true,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:true,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:true,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Maria Jose",
        img: "marijose.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:true,
            cafe:true,
            alto: false,
            tatuajes:false,
            nacer:true,
            bolso:true,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:true,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:true,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:true,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Irina",
        img: "irina.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:false,
            cafe:true,
            alto: false,
            tatuajes:false,
            nacer:true,
            bolso:true,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:true,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:true,
            calla:false,
            ocupado:true,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:true,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Alberto",
        img: "alberto.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:false,
            energetica:false,
            cafe:false,
            alto: true,
            tatuajes:false,
            nacer:false,
            bolso:false,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:true,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:true,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:true,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Ángela",
        img: "angela.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:false,
            cafe:false,
            alto: true,
            tatuajes:true,
            nacer:true,
            bolso:false,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:true,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:true,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "David",
        img: "david.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:false,
            cafe:false,
            alto: true,
            tatuajes:true,
            nacer:false,
            bolso:false,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:true,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:true,
            respTodo:false,
            calla:true,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:true,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Alba",
        img: "alba.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:false,
            energetica:true,
            cafe:true,
            alto:false,
            tatuajes:true,
            nacer:true,
            bolso:false,
            tomelloso:false,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:true,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:true,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Mª Carmen",
        img: "mcarmen.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:false,
            cafe:true,
            alto: false,
            tatuajes:false,
            nacer:true,
            bolso:false,
            tomelloso:false,

            // Preguntas Intermedias
            arregla:false,
            comenta:true,
            fuera:false,
            feliz:false,
            cTodo:true,
            metePata:true,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:true,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Nayeli",
        img: "nayeli.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:false,
            cafe:false,
            alto:false,
            tatuajes:true,
            nacer:false,
            bolso:false,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:true,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:true,
            trauma:false,
        }
    },

    {
        nombre: "Ainhoa",
        img: "ainhoa.png",
        respuestas: {

            // Preguntas Generales
            septum:true,
            gafas:true,
            energetica:true,
            cafe:true,
            alto: true,
            tatuajes:true,
            nacer:false,
            bolso:true,
            tomelloso:false,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:true,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:true,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:true,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Ana M.",
        img: "anam.png",
        respuestas: {

            // Preguntas Generales
            septum:true,
            gafas:true,
            energetica:true,
            cafe:true,
            alto: true,
            tatuajes:true,
            nacer:true,
            bolso:false,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:true,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:true,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:true,
            clase:false,
            codigo:false,
            coche:false,
            trauma:false,
        }
    },

    {
        nombre: "Irene",
        img: "irene.png",
        respuestas: {

            // Preguntas Generales
            septum:false,
            gafas:true,
            energetica:false,
            cafe:false,
            alto: false,
            tatuajes:false,
            nacer:false,
            bolso:true,
            tomelloso:true,

            // Preguntas Intermedias
            arregla:false,
            comenta:false,
            fuera:false,
            feliz:false,
            cTodo:false,
            metePata:false,
            dormido:false,
            respTodo:false,
            calla:false,
            ocupado:false,
            observa:false,
            pideDes:false,
            tarde:false,

            // Preguntas Especificas
            random:false,
            bocadillo:false,
            hardcore:false,
            gato:false,
            planchar:false,
            trabajo:false,
            descansos:false,
            zapatillas:false,
            azucar:false,
            militar:false,
            sueldo:false,
            fumar:false,
            clase:false,
            codigo:false,
            coche:false,
            trauma:true,
        }
    }
];

// Las preguntas generales
const preguntasG = [
    {id: "septum", texto: '¿Tiene el piercing "septum"?'},
    {id: "gafas", texto: '¿Lleva gafas habitualmente?'},
    {id: "energetica", texto: '¿Bebe bebida energética?'},
    {id: "cafe", texto: '¿Bebe café?'},
    {id: "alto", texto: '¿Es alt@?'},
    {id: "tatuajes", texto: '¿Tiene tatuajes?'},
    {id: "nacer", texto: '¿Nació antes del 2000?'},
    {id: "bolso", texto: '¿Trae bolso?'},
    {id: "tomelloso", texto: '¿Vive en Tomelloso?'}
];

const preguntasIm = [
    {id: "arregla", texto: '¿Siempre arregla problemas de otros?'},
    {id: "comenta", texto: '¿Comenta absolutamente todo en voz alta?'},
    {id: "fuera", texto: '¿Trae cosas de fuera que todos usan?'},
    {id: "feliz", texto: '¿Tiene solo dos estados: feliz o enfadado?'},
    {id: "cTodo", texto: '¿Lo comenta todo?'},
    {id: "metePata", texto: '¿Siempre mete la pata en lo mismo?'},
    {id: "dormido", texto: '¿Se queda dormido en medio de la clase?'},
    {id: "respTodo", texto: '¿Siempre tiene respuesta para todo?'},
    {id: "calla", texto: '¿Nunca se calla?'},
    {id: "ocupado", texto: '¿Corre de aquí para allá siempre ocupado?'},
    {id: "observa", texto: '¿Observa todo sin decir nada, pero se entera de todo?'},
    {id: "pideDes", texto: '¿Siempre corta la clase pidiendo descanso?'},
    {id: "tarde", texto: '¿Suele llegar tarde?'},
];

const preguntasE = [
    {id: "random", texto: '¿Suele hacer preguntas random?'},
    {id: "bocadillo", texto: '¿Es el que viene solo acompañado de su bocadillo?'},
    {id: "hardcore", texto: '¿Es la que nunca va a decir que no a una fiesta de hardcore?'},
    {id: "gato", texto: '¿Lleva más pelo de gato encima que suyo?'},
    {id: "planchar", texto: '¿La tienen planchando 8 horas al día?'},
    {id: "trabajo", texto: '¿La lió gordísima en el trabajo?'},
    {id: "descansos", texto: '¿Nos permite muchos descansos?'},
    {id: "zapatillas", texto: '¿Es el que busca zapatillas en clase?'},
    {id: "azucar", texto: '¿Le dan vahídos cuando le baja el azúcar?'},
    {id: "militar", texto: '¿Ha sido militar?'},
    {id: "sueldo", texto: '¿Es a la que más sueldo le han quitado?'},
    {id: "fumar", texto: '¿Suele decir:"Paradita para fumar"?'},
    {id: "clase", texto: '¿Es la persona que más veces se ha ido de clase?'},
    {id: "codigo", texto: '¿Le sale el código siempre en rojo?'},
    {id: "coche", texto: '¿Se ha tenido que ir de clase para examinarse del coche?'},
    {id: "trauma", texto: '¿Nos ha abandonado y a Carlos ha traumado?'},
];

const preguntas = [
    {preguntasG},
    {preguntasIm},
    {preguntasE},
]

// Lista de alumnos y preguntas (suponemos que ya tienes el array "alumnos" y los arrays "preguntasG", "preguntasIm", "preguntasE")

let alumnosRestantes = [...alumnos]; // copia alumnos

// Función para contar cuántos alumnos responden true a una pregunta
function contarAlumnosConRespuestaTrue(alumnos, idPregunta) {
    return alumnos.filter(alumno => alumno.respuestas[idPregunta] === true).length;
}

// Función que ordena preguntas por número de alumnos con respuesta true
function ordenarPreguntasPorNumeroAlumnosTrue(preguntas, alumnos) {
    return preguntas.slice().sort((a, b) => {
        return alumnos.filter(alumno => alumno.respuestas[b.id]).length
            - alumnos.filter(alumno => alumno.respuestas[a.id]).length;
    });
}

// Función para iniciar preguntas generales con primera pregunta aleatoria y resto ordenado
function iniciarPreguntasGenerales(preguntasG, alumnosRestantes) {
    const indiceAleatorio = Math.floor(Math.random() * preguntasG.length);
    const primeraPregunta = preguntasG[indiceAleatorio];
    const restoPreguntas = preguntasG.filter((_, i) => i !== indiceAleatorio);
    const preguntasOrdenadas = ordenarPreguntasPorNumeroAlumnosTrue(restoPreguntas, alumnosRestantes);
    return [primeraPregunta, ...preguntasOrdenadas];
}

// Después puedes llamar a:
let preguntasGeneralesRestantes = iniciarPreguntasGenerales(preguntasG, alumnosRestantes);

let preguntasIntermediasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(preguntasIm, alumnosRestantes);
let preguntasEspecificasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(preguntasE, alumnosRestantes);

let etapaActual = "generales";
let restoPreguntas = [...preguntasGeneralesRestantes];
let preguntaActual = null;

// Mostrar sección preguntas y botones
function mostrarSeccionPreguntas() {
    document.getElementById("questionText").style.display = "block";
    document.querySelector(".answers").style.display = "block";
    document.getElementById("personaAcertada").style.display = "none";
    document.getElementById("personaNoAcertada").style.display = "none";
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
            console.log("No quedan preguntas ni alumnos para continuar.");
            return;
        }
    }
    preguntaActual = restoPreguntas.shift();
    document.getElementById("questionText").textContent = preguntaActual.texto;
    mostrarSeccionPreguntas();
}

// Actualizar etapa según número de alumnos restantes
function actualizarEtapa() {
    if (alumnosRestantes.length === 1) {
        etapaActual = "final";
        restoPreguntas = [];
        intentoFinalAdivinar();
    } else if (alumnosRestantes.length <= 3) {
        if (etapaActual !== "especificas") {
            etapaActual = "especificas";
            preguntasEspecificasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(preguntasE, alumnosRestantes);
            restoPreguntas = [...preguntasEspecificasRestantes];


            // Irina está pensando
            irinaPensando = true;
            cambiarImagenIrina("irinapensando.png");

            primerIntentoAdivinar();
        }
    } else if (alumnosRestantes.length <= 7) {
        if (etapaActual !== "intermedias") {
            etapaActual = "intermedias";
            preguntasIntermediasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(preguntasIm, alumnosRestantes);
            restoPreguntas = [...preguntasIntermediasRestantes];
        }
    } else {
        if (etapaActual !== "generales") {
            etapaActual = "generales";
            preguntasGeneralesRestantes = iniciarPreguntasGenerales(preguntasG, alumnosRestantes);
            restoPreguntas = [...preguntasGeneralesRestantes];
        }
    }
    console.log("Etapa actual:", etapaActual);
}

// Filtrar alumnos por respuesta del usuario
function filtrarAlumnosPorRespuesta(respuestaUsuario) {
    alumnosRestantes = alumnosRestantes.filter(alumno => alumno.respuestas[preguntaActual.id] === respuestaUsuario);
    console.log("Alumnos restantes tras filtrar:", alumnosRestantes.map(a => a.nombre));
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
    filtrarAlumnosPorRespuesta(respuestaUsuario);
    actualizarEtapa();

    // --- Control de emociones de Irina (solo si no está pensando) ---
    if (!irinaPensando && alumnosRestantes.length > 1) {
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
        if (!primerIntentoHecho && alumnosRestantes.length <= 3 && alumnosRestantes.length > 1) {
            // Primer intento de adivinar solo UNA vez cuando quedan entre 2 y 3 alumnos
            primerIntentoHecho = true;
            mostrarIntentoAdivinar();
        } else if (alumnosRestantes.length === 1) {
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
function mostrarIntentoAdivinar() {

    irinaPensando = true;
    cambiarImagenIrina("irinapensando.png");

    const personaAdivinada = alumnosRestantes[0];

    // Ocultar pregunta y botones
    document.getElementById("questionText").style.display = "none";
    document.querySelector(".answers").style.display = "none";

    // Mostrar imagen
    const imagenElemento = document.getElementById("imagenPersonaIntentoAcertada");
    imagenElemento.src = `img/${personaAdivinada.img}`;
    imagenElemento.alt = `Foto de ${personaAdivinada.nombre}`;

    // Mostrar el cuadro de intento
    document.getElementById("personaAcertada").style.display = "block";
    document.getElementById("personaNoAcertada").style.display = "none";

    // Ocultar botones de sí/no de pregunta mientras se adivina
    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNo").style.display = "none";
}

function intentoFinalAdivinar() {

    // Irina deja de pensar y se pone muy feliz
    irinaPensando = false;
    estadoIrina = 2; // marcamos que está en el estado más feliz
    cambiarImagenIrina("irinamuyfeliz.png");

    const personaFinal = alumnosRestantes[0];

    // Ocultar preguntas y botones
    document.getElementById("questionText").style.display = "none";
    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNo").style.display = "none";

    // Mostrar imagen del alumno final
    const imagenElemento = document.getElementById("imagenPersonaIntentoAcertada");
    if (imagenElemento) {
        imagenElemento.src = `img/${personaFinal.img}`;
        imagenElemento.alt = `Foto de ${personaFinal.nombre}`;
    }

    // Mostrar el bloque del intento
    const acertadaDiv = document.getElementById("personaAcertada");
    const noAcertadaDiv = document.getElementById("personaNoAcertada");

    noAcertadaDiv.style.display = "none";
    acertadaDiv.style.display = "block";

    // Asegurarse de ocultar el botón "No"
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
    window.location.href = "personaAcertada";
});

document.getElementById("btnNoAcertado").addEventListener("click", () => {
    // Oculta la sección de intento de adivinar
    document.getElementById("personaAcertada").style.display = "none";
    document.getElementById("personaNoAcertada").style.display = "none";

    // Volvemos a mostrar la sección de preguntas
    document.getElementById("questionText").style.display = "block";
    document.getElementById("btnYes").style.display = "inline-block";
    document.getElementById("btnNo").style.display = "inline-block";

    // Solo preguntas específicas filtradas para alumnos restantes que puedan responder true
    preguntasEspecificasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(
        preguntasE.filter(p => alumnosRestantes.some(a => a.respuestas[p.id] === true)),
        alumnosRestantes
    );
    restoPreguntas = preguntasEspecificasRestantes;

    mostrarSiguientePregunta();
});

document.getElementById("btnSeguirIntentando").addEventListener("click", () => {
    document.getElementById("personaNoAcertada").style.display = "none";
    mostrarSeccionPreguntas();
    mostrarSiguientePregunta();
});

document.getElementById("btnFinalizarJuego").addEventListener("click", () => {
    window.location.href = "index";
});

function mostrarIntentoFinal() {
    const personaFinal = alumnosRestantes[0];

    // Ocultar preguntas y botones normales
    document.getElementById("questionText").style.display = "none";
    document.getElementById("btnYes").style.display = "none";
    document.getElementById("btnNo").style.display = "none";

    // Mostrar imagen
    const imagenElemento = document.getElementById("imagenPersonaIntentoAcertada");
    imagenElemento.src = `img/${personaFinal.img}`;
    imagenElemento.alt = `Foto de ${personaFinal.nombre}`;

    // Mostrar el cuadro de intento
    const acertadaDiv = document.getElementById("personaAcertada");
    const noAcertadaDiv = document.getElementById("personaNoAcertada");
    noAcertadaDiv.style.display = "none";
    acertadaDiv.style.display = "block";

    // Ocultar el botón de NO (solo hay una opción)
    document.getElementById("btnNoAcertado").style.display = "none";
}

// Inicio del juego mostrando la primera pregunta
mostrarSiguientePregunta();










