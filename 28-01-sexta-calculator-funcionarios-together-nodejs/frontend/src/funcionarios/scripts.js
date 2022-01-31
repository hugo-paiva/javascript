// Instancing buttons and table body
const sendButton = document.getElementById('send-button')
const ramalButton = document.getElementById('ramal-button')
const birthdateButton = document.getElementById('birthdate-button')
const sectionButton = document.getElementById('section-button')
const tbody = document.querySelector('table tbody')

const apiUrl = 'http://localhost:3000/'

sendButton.addEventListener('click', () => {
    const route = 'add-worker'
    const fullUrl = apiUrl + route
    const newWorker = getDataInput()

    fetch(fullUrl, {
        method: 'POST',
        body: JSON.stringify(newWorker),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
})

ramalButton.addEventListener('click', () => {
    const route = 'ramal'
    const fullUrl = apiUrl + route
    fetch(fullUrl)
        .then(response => response.json())
        .then(dataJSON => drawElementsOnScreen(dataJSON))
})

birthdateButton.addEventListener('click', () => {
    const birthdayText = document.getElementById('birthday-text').value
    const route = 'birthday/'
    const fullUrl = apiUrl + route + birthdayText
    fetch(fullUrl)
        .then(response => response.json())
        .then(dataJSON => drawElementsOnScreen(dataJSON))
})

sectionButton.addEventListener('click', () => {
    const sectionText = document.getElementById('section-text').value
    const route = 'section/'
    const fullUrl = apiUrl + route + sectionText
    console.log(fullUrl)
    fetch(fullUrl)
        .then(response => response.json())
        .then(dataJSON => drawElementsOnScreen(dataJSON))
})

function drawElementsOnScreen(data) {
    if (data.length == 0 ) {
        tbody.innerHTML = `
                <tr>
                    <td>Niguém encontrado</td>
                </tr>
        
        `
    } else {
        const table = data.map(function (item) {
            return `
                <tr>
                    <td>${item.registration}</td>
                    <td>${item.name.toUpperCase()}</td>
                    <td>${item.ramal}</td>
                    <td>${item.email}</td>
                    <td>${item.section}</td>
                    <td>${item.birthdate}</td>
                </tr>
            `
        })
        tbody.innerHTML = table
    }
}

// Get the input of new Workers registration and save it into a JSON file 

function getDataInput() {
    const registration = document.getElementById('registration').value
    const name = document.getElementById('name').value
    const ramal = document.getElementById('ramal').value
    const email = document.getElementById('email').value
    const section = document.getElementById('section').value
    const birthdate = document.getElementById('birthdate').value

    const newInputWorker = {
        registration,
        name,
        ramal,
        email,
        section,
        birthdate
    }

    return newInputWorker
} 