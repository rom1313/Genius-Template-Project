const genius = $

style = 'color:orange;position:absolute;top:90%;left:90%;transform: translate(-50%, -50%);font-size:40px'

let p = genius.element('h1','#test',style)
let boutton = genius.element('button','#bouttontest')

genius.textContent(genius.heure(),'#test')
genius.textContent('Boutton','#bouttontest')

genius.event('#bouttontest','click',(e)=>{
console.log('boutton appuyé !');
p.classList.add('heureanimation')

})
