let p = document.querySelector('p')

function startWriting() {
    clearWriting()
    let count = 1
    let timesWriting = document.querySelector('input').value
    while (count <= timesWriting) {
        // document.querySelector('#blackboard').appendChild(p)
        if ((count-1) % 11 == 0 ) {
            clearWriting()
        }
        p.innerHTML = p.innerHTML + `bobao ${count}</br> `
        count++
    }
}

function clearWriting() {
    p.innerHTML = ''
}