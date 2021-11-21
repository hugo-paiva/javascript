let p = document.createElement('p')
p.innerHTML = 'Bom dia!'

document.querySelector('#conteudo').appendChild(p)


let albumList = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/in-through-the-out-door-1555362294.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/presence-led-zeppelin-1555363010.jpg?crop=0.9971617786187322xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/physical-graffiti-1555363262.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-1-1555363346.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-ii-1555363460.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-iv-1555363513.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://lh3.googleusercontent.com/-FGILtwdtfVI/TXFDexd2wyI/AAAAAAAABOI/Hx9bALbsdoU/s1600/Pink_Floyd_-_The_Division_Bell.jpg"
]

let amountOfImages = albumList.length 

for (let i = 0; i < amountOfImages; i++) {
    var img = document.createElement('img')
    img.src = albumList.pop()
    document.querySelector('#conteudo').appendChild(img)
    img.style.width = '300px'
    img.style.padding = '1rem'
}


