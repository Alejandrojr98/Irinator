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
const nuevoBtn=document.getElementById('jugarNuevo');
const animalImgEl = document.getElementById('animalImage');
const imgGenio=document.getElementById("genio");
let contadorYes=0;

function render() {
    if (current.type === 'q') {
        questionEl.textContent = current.text;
        resultEl.textContent = '';
        yesBtn.style.display = 'inline-block';
        noBtn.textContent = 'No';
        inicioBtn.style.display = 'none';
        animalImgEl.style.display = 'none';
        nuevoBtn.style.display = 'none';
        if(contadorYes===2){
            imgGenio.src ="img/irinamuyfeliz.png";
        }
        contadorYes+=1;
    } else {
        questionEl.textContent = '';
        resultEl.textContent = `Creo que estás pensando en ${current.text}!`;
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        inicioBtn.style.display = 'block';
        nuevoBtn.style.display = 'block';

        // Mostrar imagen del animal
        if (current.img) {
            animalImgEl.src = `img/${current.img}`;
            animalImgEl.style.display = 'block';
        } else {
            animalImgEl.style.display = 'none';
        }
    }
}



yesBtn.addEventListener('click', () => {
    if (current.yes) {
        current = current.yes;
        render();
    }
});

noBtn.addEventListener('click', () => {
    if (current.type === 'g') {
        current = animales; // reiniciar
        render();
    } else if (current.no) {
        current = current.no;
        render();
    }
});
// inicioBtn.addEventListener('click', () => {
//         window.location.href = "/index.html";
// });


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') yesBtn.click();
    if (e.key === 'Escape') noBtn.click();
    render();
});

render();


