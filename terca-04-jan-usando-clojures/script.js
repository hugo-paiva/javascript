function changeFontSize() {
    let size = 16

    return {
        increment: function () {
            size++
            document.querySelector('main').style.fontSize = size + 'px'
        },
        decrement: function () {
            size--
            document.querySelector('main').style.fontSize = size + 'px'
        }
    }
}

const fontSize = changeFontSize()

document.querySelector('#greater').addEventListener('click', () =>
    fontSize.increment())

document.querySelector('#less').addEventListener('click', () =>
    fontSize.decrement())