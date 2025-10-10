// game2.js

const animales = {
    type: "q",
    text: "¿Vive en el agua?",
    yes: {
        type: "q",
        text: "¿Tiene aletas?",
        yes: {
            type: "q",
            text: "¿Es un animal grande y peligroso?",
            yes: { type: "g", text: "el tiburón", img: "tiburon.png" },
            no: { type: "g", text: "el pez", img: "pez.png" },
        },
        no: { type: "g", text: "la tortuga", img: "tortuga.png" },
    },
    no: {
        type: "q",
        text: "¿Tiene plumas?",
        yes: {
            type: "q",
            text: "¿Puede volar?",
            yes: { type: "g", text: "el loro", img: "loro.png" },
            no: {
                type: "q",
                text: "¿Tiene el cuello muy largo?",
                yes: { type: "g", text: "el flamenco", img: "flamenco.png" },
                no: { type: "g", text: "la gallina", img: "gallina.png" },
            },
        },
        no: {
            type: "q",
            text: "¿Es doméstico?",
            yes: { type: "g", text: "el perro", img: "perro.png" },
            no: {
                type: "q",
                text: "¿Tiene trompa?",
                yes: { type: "g", text: "el elefante", img: "elefante.png" },
                no: {
                    type: "q",
                    text: "¿Tiene manchas o un cuello largo?",
                    yes: { type: "g", text: "la jirafa", img: "jirafa.png" },
                    no: {
                        type: "q",
                        text: "¿Tiene rayas?",
                        yes: { type: "g", text: "el tigre", img: "tigre.png" },
                        no: { type: "g", text: "el oso", img: "oso.png" },
                    },
                },
            },
        },
    },
};

let current = animales;
const questionEl = document.getElementById('questionText');
const resultEl = document.getElementById('resultText');
const yesBtn = document.getElementById('btnYes');
const noBtn = document.getElementById('btnNo');
const inicioBtn = document.getElementById('reiniciar');
const nuevoBtn = document.getElementById('jugarNuevo');
const animalImgEl = document.getElementById('animalImage');
const imgGenio = document.getElementById("genio");
const formBtn = document.getElementById("formularioA");
let contadorYes = 0;

function render() {
    if (current.type === 'q') {
        questionEl.textContent = current.text;
        resultEl.textContent = '';
        yesBtn.style.display = 'inline-block';
        noBtn.textContent = 'No';
        inicioBtn.style.display = 'none';
        nuevoBtn.style.display = 'none';
        formBtn.style.display = 'none';
        // Ocultar imagen del animal y detener palpitación mientras hay preguntas
        animalImgEl.style.display = 'none';
        animalImgEl.classList.remove('palpita');

        if (contadorYes === 2) {
            imgGenio.src = "img/irinamuyfeliz.png";
            console.log(contadorYes)
        }else if(contadorYes === -1 || contadorYes === -2){
            imgGenio.src = "img/irinaenfadada.png";
            console.log(contadorYes)
        }else if(contadorYes === 0 || contadorYes=== 1){
            imgGenio.src = "img/irinaneutra.png";
            console.log(contadorYes)
        }else if(contadorYes < -2){
            imgGenio.src = "img/irinamuyenfadada.png";
            console.log(contadorYes)
        }
        // contadorYes += 1;
    } else {
        // Estado: ha adivinado el animal
        questionEl.textContent = '';
        // 🔹 Cambiamos a innerHTML para aplicar la clase de resaltado dorado
        resultEl.innerHTML = `Creo que estás pensando en <span class="resaltado">${current.text}</span>!`;
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        inicioBtn.style.display = 'block';
        nuevoBtn.style.display = 'block';
        formBtn.style.display = 'block';
        imgGenio.src = "img/irinamuyfeliz.png";

        // Mostrar imagen del animal adivinado y aplicar animación de palpitación
        if (current.img) {
            animalImgEl.src = `img/${current.img}`;
            animalImgEl.style.display = 'block';

            // Reiniciar animación si se repite el estado
            animalImgEl.classList.remove('palpita');
            void animalImgEl.offsetWidth; // forzar reflow
            animalImgEl.classList.add('palpita');
        } else {
            animalImgEl.style.display = 'none';
            animalImgEl.classList.remove('palpita');
        }
    }
}

yesBtn.addEventListener('click', () => {
    if (current.yes) {
        current = current.yes;
        contadorYes += 1;
        render();
    }
});

noBtn.addEventListener('click', () => {
    if (current.type === 'g') {
        current = animales; // reiniciar árbol
        contadorYes -= 1;
        render();
    } else if (current.no) {
        current = current.no;
        contadorYes -= 1;
        render();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') yesBtn.click();
    if (e.key === 'Escape') noBtn.click();
    render();
});

render();