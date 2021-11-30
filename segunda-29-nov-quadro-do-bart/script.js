let p = document.querySelector('p')

function clearWriting() {
    p.innerHTML = ''
}

function startWriting() {
    clearWriting()
    let phrase = document.querySelector('#phrase').value
    let timesWriting = document.querySelector('input#times').value
    let count = 1
    let totalWipes = 0
    
    if (phrase == '') {
        phrase = 'Eu não incentivarei os outros a voarem'
    }
    while (count <= timesWriting) {
        if (count > 1 && (count-1) % 11 == 0 ) {
            totalWipes++
            clearWriting()
        }
        p.innerHTML = p.innerHTML + `${count}~ ${phrase}</br> `
        count++
    }
    document.querySelector('article').innerHTML = `Esse quadro foi limpo ${totalWipes} vezes.`
}