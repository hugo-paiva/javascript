function getCarSpeed(min, max) {
    // Return random speed between max and min arguments
    return Math.floor(Math.random() * (max - min)) + min
}

function getRealSpeed(speed, skid) {
    // Returns real speed after subtracting the percentual skid of the car
    return speed - ((skid / 100) * speed)
}

let pedrosCar
let jucasCar
let ednasCar

let p = document.querySelector('#winner')

function startRace(raceMode) {
    let pedrosLaps = 0
    let jucasLaps = 0
    let ednasLaps = 0

    for (let i = 0; i < raceMode; i++) {
        pedrosCar = getRealSpeed(getCarSpeed(150, 230), 3)
        jucasCar = getRealSpeed(getCarSpeed(120, 260), 5)
        ednasCar = getRealSpeed(getCarSpeed(180, 220), 1)
        if (pedrosCar >= jucasCar && pedrosCar >= ednasCar) {
            pedrosLaps++
        } else if (jucasCar >= pedrosCar && jucasCar >= ednasCar) {
            jucasLaps++
        } else if (ednasCar >= pedrosCar && ednasCar >= jucasCar) {
            ednasLaps++
        }
    }

    let pedro = document.querySelector('#pedro')
    let juca = document.querySelector('#juca')
    let edna = document.querySelector('#edna')
    pedro.innerHTML = `ganhou ${pedrosLaps} voltas`
    juca.innerHTML = `ganhou ${jucasLaps} voltas`
    edna.innerHTML = `ganhou ${ednasLaps} voltas`
    
    if (pedrosLaps >= jucasLaps && pedrosLaps >= ednasLaps) {
        p.innerHTML = `Pedro venceu com ${pedrosLaps} voltas`
    } else if (jucasLaps >= pedrosLaps && jucasLaps >= ednasLaps) {
        p.innerHTML = `Juca venceu com ${jucasLaps} voltas`
    } else {
        p.innerHTML = `Edna venceu com ${ednasLaps} voltas`
    }
}

function fastRace() {
    // Quick run 10 laps
    startRace(10)
}

function grandPrix() {
    // Grand Prix 70 laps
    startRace(70)
}

function enduro() {
    // Enduro 160 laps
    startRace(160)
}