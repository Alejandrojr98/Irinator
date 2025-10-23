// ===== Irinator Maravillas – auto start si no hay #playBtn =====

// ===== Datos =====
const ENTITIES = [
    { id: 1001, name: "Gran Muralla China", country: "China" },
    { id: 1002, name: "Petra", country: "Jordania" },
    { id: 1003, name: "Cristo Redentor", country: "Brasil" },
    { id: 1004, name: "Machu Picchu", country: "Perú" },
    { id: 1005, name: "Chichén Itzá", country: "México" },
    { id: 1006, name: "Coliseo", country: "Italia" },
    { id: 1007, name: "Taj Mahal", country: "India" },
];

const QUESTIONS = [
    { id: 2001, text: "¿Está en Asia?" },
    { id: 2002, text: "¿Está en América?" },
    { id: 2003, text: "¿Está en Europa?" },
    { id: 2004, text: "¿Fue construido antes del año 1000 d.C.?" },
    { id: 2005, text: "¿Su material principal es piedra tallada?" },
    { id: 2006, text: "¿Es una estructura defensiva o muro?" },
    { id: 2007, text: "¿Es un complejo arqueológico en montaña o altiplano?" },
    { id: 2008, text: "¿Es un anfiteatro romano?" },
    { id: 2009, text: "¿Es una estatua de gran tamaño?" },
    { id: 2010, text: "¿Es un mausoleo o monumento funerario?" },
    { id: 2011, text: "¿Su civilización de origen es precolombina?" },
    { id: 2012, text: "¿Está en un país de habla hispana?" },
];

// answers[entityId][questionId] = 1 (sí) | 0 (no) | null (desconocido)
const ANSWERS = {
    1001: { 2001:1,2002:0,2003:0,2004:1,2005:1,2006:1,2007:0,2008:0,2009:0,2010:0,2011:0,2012:0 }, // Gran Muralla
    1002: { 2001:1,2002:0,2003:0,2004:1,2005:1,2006:0,2007:0,2008:0,2009:0,2010:0,2011:0,2012:0 }, // Petra
    1003: { 2001:0,2002:1,2003:0,2004:0,2005:0,2006:0,2007:0,2008:0,2009:1,2010:0,2011:0,2012:0 }, // Cristo Redentor
    1004: { 2001:0,2002:1,2003:0,2004:1,2005:1,2006:0,2007:1,2008:0,2009:0,2010:0,2011:1,2012:0 }, // Machu Picchu
    1005: { 2001:0,2002:1,2003:0,2004:1,2005:1,2006:0,2007:0,2008:0,2009:0,2010:0,2011:1,2012:1 }, // Chichén Itzá
    1006: { 2001:0,2002:0,2003:1,2004:1,2005:1,2006:0,2007:0,2008:1,2009:0,2010:0,2011:0,2012:0 }, // Coliseo
    1007: { 2001:1,2002:0,2003:0,2004:0,2005:1,2006:0,2007:0,2008:0,2009:0,2010:1,2011:0,2012:0 }, // Taj Mahal
};

// ===== Estado =====
const state = {
    asked: new Set(),
    candidates: ENTITIES.map(e => e.id),
    currentQ: null,
    finished: false,
};

// ===== UI refs (algunos pueden no existir en maravillas.html) =====
const $qText      = document.getElementById("questionText");
const $btnYes     = document.getElementById("btnYes");
const $btnNo      = document.getElementById("btnNo");
const $btnUnknown = document.getElementById("btnUnknown");
const $btnMenu     = document.getElementById("reiniciarM");
const $btnNewGame  = document.getElementById("jugarNuevoM");
const $answersBox  = document.querySelector(".question-box .answers");


const $play       = document.getElementById("playBtn");      // puede NO existir
const $reset      = document.getElementById("resetBtn");     // puede NO existir
const $candidates = document.getElementById("candidates");   // puede NO existir
const $progress   = document.getElementById("progress");     // puede NO existir
const $result     = document.getElementById("resultSection");// puede NO existir
const $resTitle   = document.getElementById("resultTitle");  // puede NO existir
const $resDesc    = document.getElementById("resultDesc");   // puede NO existir
const $confirm    = document.getElementById("confirmBtn");   // puede NO existir
const $deny       = document.getElementById("denyBtn");      // puede NO existir

// ===== Utilidades =====
function scoreQuestion(qId, ids){
    let y=0, n=0, u=0;
    for (const id of ids){
        const v = ANSWERS[id][qId];
        if (v === 1) y++; else if (v === 0) n++; else u++;
    }
    const total = y + n + u || 1;
    const balance = 1 - Math.abs(y/total - n/total); // ideal 0.5/0.5
    const unknownPenalty = (u/total) * 0.5;
    return balance - unknownPenalty;
}
function nextBestQuestion(){
    const remaining = QUESTIONS.filter(q => !state.asked.has(q.id));
    if (!remaining.length) return null;
    let best = remaining[0], bestScore = -Infinity;
    for (const q of remaining){
        const s = scoreQuestion(q.id, state.candidates);
        if (s > bestScore){ bestScore = s; best = q; }
    }
    return best;
}
function filterByAnswer(qId, ans){
    if (ans === null) return; // "No sé" -> no filtramos
    state.candidates = state.candidates.filter(id=>{
        const v = ANSWERS[id][qId];
        return (v === undefined || v === null) ? true : v === ans;
    });
}
function oneLeft(){
    return state.candidates.length === 1
        ? ENTITIES.find(e=>e.id===state.candidates[0])
        : null;
}

// ===== UI helpers (tolerantes a elementos ausentes) =====
function enableAnswers(v){
    [$btnYes,$btnNo,$btnUnknown].forEach(b => { if (b) b.disabled = !v; });
}
function renderCandidates(){
    if (!$candidates) return;
    $candidates.innerHTML = "";
    state.candidates
        .map(id => ENTITIES.find(e=>e.id===id).name)
        .forEach(name=>{
            const li = document.createElement("li");
            li.className = "chip";
            li.textContent = name;
            $candidates.appendChild(li);
        });
}
function renderProgress(){
    if ($progress) $progress.textContent = `Preguntas: ${state.asked.size} · Candidatos: ${state.candidates.length}`;
}

function askNext(){
    if (state.finished) return;

    const single = oneLeft();
    if (single){ showGuess(single); return; }

    const q = nextBestQuestion();
    if (!q){
        const e = ENTITIES.find(x=>x.id===state.candidates[0]);
        showGuess(e); return;
    }
    state.currentQ = q.id;
    state.asked.add(q.id);
    if ($qText) $qText.textContent = q.text;
    enableAnswers(true);
    renderProgress();
    renderCandidates();
}

function showGuess(entity){
    state.finished = true;

    // Mensaje + imagen (si quieres dejar solo texto, quita el innerHTML)
    if ($qText){
        $qText.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:14px;">
        <p style="font-size:22px;color:#f1d96b;margin:0;">✨ Creo que estabas pensando en...</p>
        <img src="img/${{
            "Gran Muralla China":"china.png",
            "Petra":"petra.png",
            "Cristo Redentor":"cristo.png",
            "Machu Picchu":"machu.png",
            "Chichén Itzá":"chichen.png",
            "Coliseo":"coliseo.png",
            "Taj Mahal":"taj.png"
        }[entity.name] || "default.png"}"
             alt="${entity.name}"
             style="width:250px;height:250px;object-fit:cover;border-radius:10px;box-shadow:0 0 20px rgba(241,217,107,.45);">
        <p style="font-size:24px;color:#fff;text-align:center;margin:0;">
          <strong>${entity.name}</strong><br>
          <span style="font-size:18px;color:#f1d96b;">(${entity.country})</span>
        </p>
      </div>
    `;
    }

    // Oculta respuestas y desactiva eventos
    enableAnswers(false);
    if ($answersBox) $answersBox.style.display = "none";

    // Muestra solo "Menu" y "Jugar de Nuevo"
    if ($btnMenu)    $btnMenu.style.display = "inline-block";
    if ($btnNewGame) $btnNewGame.style.display = "inline-block";

    // Por si existe una sección de resultado antigua, ocúltala
    if ($result) $result.hidden = true;
}




function continueAsking(){
    state.finished = false;
    if ($result) $result.hidden = true;
    askNext();
}

function confirmWin(){
    if ($result) $result.hidden = true;
    enableAnswers(false);
    if ($qText) $qText.textContent = "¡Genial! He acertado 🤝";
}

function resetGame(){
    state.asked.clear();
    state.candidates = ENTITIES.map(e=>e.id);
    state.currentQ = null;
    state.finished = false;

    if ($qText) $qText.textContent = ($play ? "Pulsa “Jugar” para empezar." : "Preparando la primera pregunta…");

    if ($answersBox) $answersBox.style.display = "flex";
    enableAnswers(!!$play);     // si hay botón, empieza deshabilitado; si no, ya lo activamos en el autostart
    if ($btnMenu)    $btnMenu.style.display = "none";
    if ($btnNewGame) $btnNewGame.style.display = "none";

    if ($candidates) $candidates.innerHTML = "";
    if ($progress)   $progress.textContent = "";
    if ($result)     $result.hidden = true;

    if ($play){
        $play.disabled = false;
        $play.classList.add("palpita");
    }
}


// ===== Eventos (solo si existen) =====
if ($play){
    $play.addEventListener("click", ()=>{
        $play.disabled = true;
        $play.classList.remove("palpita");
        enableAnswers(true);
        askNext();
    });
}
if ($reset){ $reset.addEventListener("click", resetGame); }

$btnYes?.addEventListener("click", ()=>{ filterByAnswer(state.currentQ, 1); enableAnswers(false); askNext(); });
$btnNo?.addEventListener("click",  ()=>{ filterByAnswer(state.currentQ, 0); enableAnswers(false); askNext(); });
$btnUnknown?.addEventListener("click", ()=>{ filterByAnswer(state.currentQ, null); enableAnswers(false); askNext(); });

$confirm?.addEventListener("click", confirmWin);
$deny?.addEventListener("click", continueAsking);

// // ===== Init =====
// document.addEventListener("DOMContentLoaded", ()=>{
//     resetGame();
//     // Si NO hay botón de jugar (maravillas.html), arrancamos automáticamente:
//     if (!$play){
//         enableAnswers(true);
//         askNext();
//     }
// });

// --- ARRANQUE AUTOMÁTICO ---
document.addEventListener("DOMContentLoaded", ()=>{
    resetGame();                        // deja todo limpio
    if (!$play) {                       // si NO hay botón Jugar en esta página
        if ($answersBox) $answersBox.style.display = "flex";
        enableAnswers(true);              // activa Sí / No / No sé
        askNext();                        // lanza la primera pregunta
    }
});

