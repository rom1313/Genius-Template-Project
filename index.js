// todo -------------- Création d'un Génius ---------------------------------

const genius = $

// todo -------------- Création d'un style ----------------------------------

let style = 'color:orange;position:absolute;top:90%;left:90%;transform: translate(-50%, -50%);font-size:40px'

// todo -------------- Création d'éléments HTML -----------------------------

let p = genius.element('h1', '#test', style)
let boutton = genius.element('button', '#bouttontest')

// todo -------------- Modification du textContent des éléments HTML --------

genius.textContent('Clique-moi', '#bouttontest')

// todo -------------- Création d'évènements --------------------------------
// event boutton
genius.event('#bouttontest', 'click', (e) => {
    console.log('boutton appuyé !');
    p.classList.add('heureanimation')
})
// event input
genius.event('#input', 'keyup', (e) => {
    let text = e.target.value
    genius.textContent(text, '#text')
})

// todo -------------- Heure dynamique ---------------------------------------
//on créer la fonction 
function heureDynamique() {
    genius.textContent(genius.heure(), '#test')
    requestAnimationFrame(heureDynamique)
}

//on appel "l'animation"
requestAnimationFrame(heureDynamique) 