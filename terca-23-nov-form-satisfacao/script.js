//function that receives input value and create element with innerHTML filled 
function createElement(value) {
    let p = document.querySelector('p')
    p.innerHTML = value
    return p
}

//Funcions save and return at the page's end
function saveOpinion() {
    let opinion = document.querySelector('#opinion').value
    document.querySelector('.results').appendChild(createElement(opinion))
}

function saveScore() {
    let score = document.querySelector('#score').value
    document.querySelector('.results').appendChild(createElement(score))
}
function savePhone() {
    let phone = document.querySelector('#phone').value
    document.querySelector('.results').appendChild(createElement(phone))
}

function saveEmail() {
    let email = document.querySelector('#email').value
    document.querySelector('.results').appendChild(createElement(email))
}

function saveAdvices() {
    let advices = document.querySelector('#advices').value
    document.querySelector('.results').appendChild(createElement(advices))
}