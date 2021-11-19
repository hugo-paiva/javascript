let answer = window.prompt('Como você gosta de ser chamado?')
let user = document.getElementById('user')
user.innerHTML = answer

let photo = document.getElementById('photo')
let realname = document.getElementById('name')
let age = document.getElementById('age')
let local = document.getElementById('location')
let title = document.getElementById('title')
let description = document.getElementById('description')
let linksreference = document.getElementById('links-reference')
let ilustration = document.getElementById('ilustrative-image')
let ilustration2 = document.getElementById('ilustrative-image2')
let ilustration3 = document.getElementById('ilustrative-image3')
let ilustration4 = document.getElementById('ilustrative-image4')


photo.querySelector('photo')

photo.setAttribute('src', 'https://media-exp1.licdn.com/dms/image/C4E03AQFbYcB3L8owFw/profile-displayphoto-shrink_800_800/0/1551273594386?e=1642636800&v=beta&t=34-_QlZNNXrq9jNNIYEWiiwi21w0Zy7mlV_fbeYojnk')

realname.innerHTML = 'Hugo'
age.innerHTML = '25'
local.innerHTML = 'Brasília - DF'
title.innerHTML = 'Leitura'

description.innerHTML = `
Consiste em ler livros por prazer, para se divertir ou aprender sobre temas de interesse.
`
linksreference.innerHTML = 'Saiba mais sobre leitura...'
linksreference.setAttribute('href', 'https://pt.wikipedia.org/wiki/Leitura')

ilustration.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg')
ilustration2.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/91M9xPIf10L.jpg')
ilustration3.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/711bhBFFY5L.jpg')
ilustration4.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/71aSbmu4MzL.jpg')

