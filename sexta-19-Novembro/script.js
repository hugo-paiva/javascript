let p = document.createElement('p')
p.innerHTML = 'Led Zeppelin'

document.querySelector('#content').appendChild(p)

let albumList = [
    {
        link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-1-1555363346.jpg?crop=1xw:1xh;center,top&resize=640:*",
        text: "Led Zeppelin remains the prototypical hard-rock album, and could well pegged as the first album of the ‘70s, aesthetically speaking. It also opened the door for countless bands, from Black Sabbath to Deep Purple, who then threw commercial caution to the wind and turned their amplifiers up to 11. Rock would never be the same. But somebody had to get their first – and that was Led Zeppelin, with this enduring classic of a first album.",
    }
    {

        link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-ii-1555363460.jpg?crop=1xw:1xh;center,top&resize=640:*",
        text: "Even for a band whose entire catalog is built on awesome riff after awesome riff, Led Zeppelin II stands out as something special. Song for song, there isn’t an album out there that celebrates the power of the riff like this one. Fans responded, as this became Led Zeppelin’s first No. 1 album, after their debut stalled at No. 10. Other bands did, too. Before the Led Zeppelin II, people wrote songs – the melody, hook and chorus grabbed them. In October 1969, it suddenly became all about the riff.",
    }
    {
        link: "https://townsquare.media/site/295/files/2016/09/LZIII.jpg?w=300&q=75",
        text: "Zeppelin had already unleashed an unheard-of-until-then heaviness on their debut, then expanded upon that sound with the follow up. The more acoustic-leaning Led Zeppelin III found them making a conscious decision to go in the opposite direction. That felt like a sharp left in the fall of 1970, but III has since become recognized as one of the most representative examples of Led Zeppelin's impressively wide musical spectrum.",
    }
    {
        link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/led-zeppelin-iv-1555363513.jpg?crop=1xw:1xh;center,top&resize=640:*",
        text: "All it took was the slightest hint of a backlash against III to instigate a resounding musical response. In fact, Led Zeppelin IV may well be the definitive hard rock album of all time. Certainly, it showcases the band's striking diversity as tough favorites like Black Dog and Rock & Roll are balanced by Tolkien-inspired fantasy (The Battle of Evermore), wistful folk (Going to California), reinvented blues (When the Levee Breaks) and the multi-faceted tour de force Stairway to Heaven."

    }
]

let amountOfImages = albumList.length

for (let i = 0; i < amountOfImages; i++) {
    if (i % 2 == 0) {
        let p = document.createElement('p')
        p.innerHTML = albumList.pop()
        document.querySelector('#content').appendChild(p)
        p.style.textAlign = 'justify'

    } else {
        let img = document.createElement('img')
        img.src = albumList.pop()
        document.querySelector('#content').appendChild(img)
        img.style.width = '300px'
        img.style.padding = '1rem'
    }
    

}


