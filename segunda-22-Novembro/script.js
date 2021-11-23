//Definindo funções
function fillMainSection() {
    let main = document.querySelector('.main')
    main.style.backgroundColor = "#67200D"
    main.style.width = '60%'
    main.style.marginInline = 'auto'

}

function species(text) {
    let p = document.createElement('p')
    p.innerHTML = text
    p.style.color = 'white'
    p.style.marginInline = 'auto'
    p.style.textAlign = 'justify'
    document.querySelector('.textual').appendChild(p)
}

function fillImages(list) {
    size = list.length
    for (let i = 0; i < size; i++) {
        let img = document.createElement('img')
        img.src = list.pop()
        img.style.width = '360px'
        img.style.margin = '0.5rem'
        document.querySelector('.container').appendChild(img)
    }
}

function title(text){
    let h1 = document.querySelector('h1')
    h1.innerHTML = text
    h1.style.color = 'white'
    h1.style.textAlign = 'left'
    h1.style.fontSize = 'rem'
}

let header = document.querySelector('header')
let nome = document.createElement('span')
let idade = document.createElement('span')
let signo = document.createElement('span')

nome.innerHTML = 'Hugo Paiva'
idade.innerHTML = '25 anos'
signo.innerHTML = 'canceriano'

header.appendChild(nome)
header.appendChild(idade)
header.appendChild(signo)
header.style.backgroundColor = '#67200D'

//Fontes
fotosDeSuricatos = [
    'https://www.infoescola.com/wp-content/uploads/2019/07/suricates-180639251.jpg',
    'https://www.infoescola.com/wp-content/uploads/2019/07/suricate-1418653667.jpg',
    'https://meioambiente.culturamix.com/blog/wp-content/gallery/curiosidades-sobre-os-suricatos-2/curiosidades-sobre-os-suricatos-1.jpg',
    'https://i.pinimg.com/originals/75/ce/ee/75ceeed3b870f67c9a485f2e7bfd2515.jpg'
]

definition = 'Suricata, suricate ou suricato (Suricata suricatta) é uma espécie de mamífero da família Herpestidae. É a única espécie descrita para o gênero Suricata. Pode ser encontrada na África do Sul, Botsuana, Namíbia e Angola. Estes animais têm cerca de meio metro de comprimento (incluindo a cauda), em média 730 gramas de peso, e pelagem acastanhada. Os suricates alimentam-se de pequenos artrópodes, principalmente escaravelhos e aranhas. Têm garras afiadas nas patas, que lhes permitem escavar a superfície do chão e tem dentes afiados para penetrar nas carapaças quitinosas das suas presas. Outra característica distinta é a sua capacidade de se elevarem nas patas traseiras, utilizando a cauda como terceiro apoio.'

//Chamada das funções
title('Suricate')
species(definition)
fillMainSection()
fillImages(fotosDeSuricatos)