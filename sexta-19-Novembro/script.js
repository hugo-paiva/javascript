let p = document.createElement('p')
p.innerHTML = 'Bom dia!'

document.querySelector('#conteudo').appendChild(p)

let img = document.createElement('img')

img.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'

document.querySelector('#conteudo').appendChild(img)

img.style.width = '300px'

