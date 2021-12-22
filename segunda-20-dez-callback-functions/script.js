// Draw means sortear
const button = document.querySelector('button')

function callback(msg) {
    window.alert(msg)
}

button.addEventListener('click', () => callback('Hey veja só! Funciona!'))