// todo -------------- Création d'un Génius ---------------------------------

const genius = $

// todo -------------- Création d'un style ----------------------------------

let style = 'color:orange;position:absolute;top:90%;left:90%;transform: translate(-50%, -50%);font-size:40px'

// todo -------------- Création d'éléments HTML -----------------------------

let p = genius.element('h1', '#test', style)
let boutton = genius.element('button', '#bouttontest')

// todo -------------- Modification du textContent des éléments HTML --------

genius.textContent('Clique-moi', '#bouttontest')
genius.textContent(genius.pourcent(document.querySelector('#inputrange').max, document.querySelector("#inputrange").value, 'string'), '#pourcent')

// todo -------------- Création d'évènements --------------------------------
// event boutton
genius.event('#bouttontest', 'click', (e) => {
    console.log('boutton appuyé !');
    p.classList.add('heureanimation')
})
// event input text
genius.event('#input', 'input', (e) => {
    let text = e.target.value
    genius.textContent(text, '#text')
})
// event input range
genius.event('#inputrange', 'input', (e) => {
    let text = e.target.value
    genius.textContent(genius.pourcent(document.querySelector('#inputrange').max, text, 'string'), '#pourcent')
})
// todo -------------- Heure dynamique ---------------------------------------
//on créer la fonction 
function heureDynamique() {
    genius.textContent(genius.heure(), '#test')
    requestAnimationFrame(heureDynamique)
}

//on appel "l'animation"
requestAnimationFrame(heureDynamique)
// todo -------------------------------------- Exemple de fonctions (tableaux) nouveauté version 1.0.50 ---------------- 

genius.sansDoublon(genius.trierNum([2, 3, 8, 1, 8, 3], 'croissant'), 'log')