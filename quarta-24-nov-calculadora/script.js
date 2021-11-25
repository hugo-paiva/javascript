const sndOperand = document.querySelector('#second-operand').value
let result = document.querySelector('p')
const btn = document.querySelector('.sum')

// function sum() {
//     result.innerHTML= fstOperand + sndOperand
//     document.querySelector('body').appendChild(result)
// }

btn.addEventListener('click', function(e) {
    e.preventDefault()
    
    const fstOperand = document.querySelector('#first-operand').value
    console.log(fstOperand)
})
// function minus() {

// }

// function times() {

// }

// function divide() {

// }
