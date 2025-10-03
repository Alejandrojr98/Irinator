// Datos de los alumnos y sus respuestas
const alumnos = [
    {
        nombre: "Claudia",
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
        respuestas: {
            // Preguntas Generales
            septum: false,
            gafas: true,
            energetica: false,
            cafe: true,
            alto:true,
            tatuajes: false,
            nacer: false,
            bolso: true,
            tomelloso: false,

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
        nombre: "MariJose",
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
    {id: "arregla", texto: '¿Es el típico try…catch (siempre arregla problemas de otros)?'},
    {id: "comenta", texto: '¿Es un System.out.println() (comenta absolutamente todo en voz alta)?'},
    {id: "fuera", texto: '¿Es un import (trae cosas de fuera que todos usan)?'},
    {id: "feliz", texto: '¿Es como un boolean (solo tiene dos estados: feliz o enfadado)?'},
    {id: "cTodo", texto: '¿Es como un scanner.nextLine() (lo comenta todo)?'},
    {id: "metePata", texto: '¿Es como un bug recurrente (siempre mete la pata en lo mismo)?'},
    {id: "dormido", texto: '¿Es un thread.sleep() (se queda dormido en medio de la clase)?'},
    {id: "respTodo", texto: '¿Se parece a un if else (siempre tiene respuesta para todo)?'},
    {id: "calla", texto: '¿Es como un while(true) (nunca se calla)?'},
    {id: "ocupado", texto: '¿Es un Runnable (corre de aquí para allá siempre ocupado)?'},
    {id: "observa", texto: '¿Es un Observer (observa todo sin decir nada, pero se entera de todo)?'},
    {id: "pideDes", texto: '¿Es como un break → porque corta la clase pidiendo descanso?'},
    {id: "tarde", texto: '¿Es un constructor que siempre se ejecuta 10 minutos después del resto(Llega tarde)? '},
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
    {id: "fumar", texto: '¿Suele decir: Paradita para fumar?'},
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

let alumnosRestantes = [...alumnos];

// Funcion para filtrar las preguntas con mayor respuesta True
function contarAlumnosConRespuestaTrue(alumnos, idPregunta) {
    return alumnos.filter(alumno => alumno.respuestas[idPregunta] === true).length;
}

// Función que ordena un array de preguntas según el número de alumnos que respondieron true
function ordenarPreguntasPorNumeroAlumnosTrue(preguntas, alumnos) {
    // Hacemos una copia para no modificar el original
    return preguntas.slice().sort((pregA, pregB) => {
        const contarA = contarAlumnosConRespuestaTrue(alumnos, pregA.id);
        const contarB = contarAlumnosConRespuestaTrue(alumnos, pregB.id);

        // Orden descendente (de mayor a menor)
        return contarB - contarA;
    });
}

let restoPreguntas;

function iniciarPreguntasGenerales(preguntasG, alumnosRestantes) {
    // Elegir índice aleatorio para la primera pregunta
    const indiceAleatorio = Math.floor(Math.random() * preguntasG.length);

    // Extraer la primera pregunta aleatoria
    const primeraPregunta = preguntasG[indiceAleatorio];

    // El resto de preguntas sin la primera
    restoPreguntas = preguntasG.filter((_, index) => index !== indiceAleatorio);

    // Ordenar el resto según alumnos restantes con respuesta true
    const preguntasOrdenadas = ordenarPreguntasPorNumeroAlumnosTrue(restoPreguntas, alumnosRestantes);

    // Devolver array con la primera pregunta aleatoria + el resto ordenado
    return [primeraPregunta, ...preguntasOrdenadas];
}

let preguntasGeneralesOrdenadas = iniciarPreguntasGenerales(preguntasG, alumnosRestantes);

let preguntasIntermediasOrdenadas = ordenarPreguntasPorNumeroAlumnosTrue(preguntasIm, alumnosRestantes);


// Mostramos las preguntas en pantalla

let preguntaActual;

function mostrarSiguientePregunta() {
    preguntaActual = restoPreguntas.shift();
    const preguntaTexto = document.getElementById("questionText");
    preguntaTexto.textContent = preguntaActual.texto;
}

let etapaActual = "generales";

// Preguntas restantes de cada Etapa
let preguntasGeneralesRestantes = [...preguntasGeneralesOrdenadas];
let preguntasIntermediasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(preguntasIm, alumnosRestantes);
let preguntasEspecificasRestantes = ordenarPreguntasPorNumeroAlumnosTrue(preguntasE, alumnosRestantes);

// Cambio de etapa
function actualizarEtapa() {
    if (alumnosRestantes.length <= 3) {
        if (etapaActual !== "especificas"){
            primerIntentoAdivinar();
        }
        etapaActual = "especificas";
        restoPreguntas = preguntasEspecificasRestantes;
    } else if (alumnosRestantes.length <= 7) {
        etapaActual = "intermedias";
        restoPreguntas = preguntasIntermediasRestantes;
    } else {
        etapaActual = "generales";
        restoPreguntas = preguntasGeneralesRestantes;
    }
    console.log("Etapa actual:", etapaActual);
}


// Filtrar alumnos por respuestas

function filtrarAlumnosPorRespuesta(respuestaUsuario){
    alumnosRestantes = alumnosRestantes.filter(alumno =>
        alumno.respuestas[preguntaActual.id] === respuestaUsuario
    );
    console.log(`Alumnos restantes tras filtrar con respuesta ${respuestaUsuario}:`, alumnosRestantes.map(a => a.nombre));
    actualizarEtapa();
}

// Configuracion de Botones
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

btnYes.addEventListener("click", () => {
    procesarRespuesta(true);
});

btnNo.addEventListener("click", () => {
    procesarRespuesta(false);
});


let intentoIndex = 0;

function procesarRespuesta(respuestaUsuario) {
    // Filtramos alumnos según la respuesta
    filtrarAlumnosPorRespuesta(respuestaUsuario);

    // Actualizamos la etapa según alumnos restantes
    actualizarEtapa();

    // Si estamos en la etapa específicas, hacemos intento de adivinar
    if (etapaActual === "especificas") {
        if (alumnosRestantes.length > 0) {
            mostrarIntentoAdivinar();
        }
    } else {
        // Si quedan preguntas, mostramos la siguiente pregunta
        if (restoPreguntas.length > 0) {
            mostrarSiguientePregunta();
        } else {
            // Si no quedan preguntas, intentamos actualizar etapa y mostrar preguntas nuevas si las hay
            actualizarEtapa();
            if (restoPreguntas.length > 0) {
                mostrarSiguientePregunta();
            }
        }
    }
}


function mostrarIntentoAdivinar() {
    // Obtenemos el primer alumno restante
    const personaAdivinada = alumnosRestantes[0];

    // Ocultamos la sección de preguntas
    document.getElementById("questionText").style.display = "none";

    // Mostramos la sección de intento de adivinar
    const acertadaDiv = document.getElementById("personaAcertada");
    const noAcertadaDiv = document.getElementById("personaNoAcertada");

    // Ponemos el nombre en ambos lugares o donde corresponda
    acertadaDiv.querySelector("#nombrePersonaIntento").textContent = personaAdivinada.nombre;
    noAcertadaDiv.querySelector("#nombrePersonaIntento").textContent = personaAdivinada.nombre;

    // Mostramos ambas secciones (o solo la que quieres mostrar para decidir)
    acertadaDiv.style.display = "block";
    noAcertadaDiv.style.display = "block";
}

// Botones para confirmar si ha acertado o no

document.getElementById("btnAcertado").addEventListener("click", () => {

});

document.getElementById("btnNoAcertado").addEventListener("click", () => {
    // Ocultamos la sección de intento de adivinar
    document.getElementById("personaAcertada").style.display = "none";
    document.getElementById("personaNoAcertada").style.display = "none";

    // Volvemos a mostrar la sección de preguntas
    document.getElementById("seccionPreguntas").style.display = "block";

    // Seguimos mostrando preguntas específicas si quedan
    if (restoPreguntas.length > 0) {
        mostrarSiguientePregunta();
    }
});

mostrarSiguientePregunta();
procesarRespuesta();
mostrarIntentoAdivinar();































// Mostrar la siguiente pregunta
// function mostrarPregunta() {
//     if (alumnosRestantes.length === 1) {
//         mostrarResultado(alumnosRestantes[0].nombre);
//         return;
//     }
//
//     if (preguntaIndex < preguntasG.length) {
//         const pregunta = preguntasG[preguntaIndex];
//         //document.getElementById("questionText").textContent = pregunta.texto;
//         let preguntaG = document.querySelector("#questionText");
//         preguntaG.textContent=pregunta.texto;
//         document.getElementById("btnYes").onclick = () => filtrarAlumnos('True');
//         document.getElementById("btnNo").onclick = () => filtrarAlumnos('False');
//     } else {
//         mostrarResultado('No se ha adivinado a un alumno');
//     }
// }
//
// // Filtrar los alumnos según la respuesta
//
// function filtrarAlumnos(respuesta) {
//     const respuestaBool = respuesta.toLowerCase() === 'sí';
//     alumnosRestantes = alumnosRestantes.filter(
//         alumno => alumno.respuestas[preguntasG[preguntaIndex].id] === respuestaBool
//     );
//     preguntaIndex++;
//     mostrarPregunta();
// }
//
// // Mostrar el resultado final
// function mostrarResultado(alumno) {
//     document.getElementById("questionContainer").classList.add("hidden");
//     document.getElementById("resultContainer").classList.remove("hidden");
//     //document.getElementById("resultText").textContent = `¡El alumno es ${alumno}!`;
//     let respuesta = document.querySelector("#resultText");
//     respuesta.textContent=alumno;
//
// }
//
// // Iniciar el juego
// mostrarPregunta();

// <button type="button" onClick="window.location.href='personas.html'">Personaje</button>


// <script>
//     // 👇 Aquí defines tus preguntas personalizadas
//     const questions = [
//     "¿Tu personaje existió en la vida real?",
//     "¿Tu personaje es famoso?",
//     "¿Tu personaje es de España?",
//     "¿Es un personaje histórico?",
//     "¿Está relacionado con el mundo del espectáculo?"
//     ];
//
//     let currentQuestion = 0;
//
//     function answer(response) {
//     console.log(`Respuesta a la pregunta ${currentQuestion + 1}: ${response}`);
//     currentQuestion++;
//
//     if (currentQuestion < questions.length) {
//     document.getElementById("questionNumber").textContent = currentQuestion + 1;
//     document.getElementById("questionText").textContent = questions[currentQuestion];
// } else {
//     document.getElementById("questionText").textContent = "¡Gracias! Has respondido todas las preguntas.";
//     document.querySelector(".answers").style.display = "none";
// }
// }
// </script>







