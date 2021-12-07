function getCarSpeed(min, max) {
    // Return random speed between max and min arguments
    min = Number(min)
    max = Number(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function getRealSpeed(speed, skid) {
    // Returns real speed after subtracting the percentual skid of the car
    return speed - ((skid / 100) * speed)
}

const Competitors = {
    popular: {
        max_speed: {min: '180', max: '200'},
        min_speed: {min: '110', max: '130'},
        skid: {min: '3', max: '4'}
    },
    sport:{
        max_speed: {min: '195', max: '215'},
        min_speed: {min: '125', max: '145'},
        skid: {min: '2', max: '3'}
    },
    supersport: {
        max_speed: {min: '210', max: '230'},
        min_speed: {min: '140', max: '160'},
        skid: {min: '1', max: '1.75'}
    }
}

function buildCar() {
    let Model = {}
    let Racer = {}
    let possibilities = Math.random()
    if (possibilities <= 0.6) {
        Model = Competitors.popular
    } else if (possibilities <= 0.85) {
        Model = Competitors.sport
    } else {
        Model = Competitors.supersport
    }
    Racer.max_speed = getCarSpeed(Model.max_speed.min, Model.max_speed.max)
    Racer.min_speed = getCarSpeed(Model.min_speed.min, Model.min_speed.max)
    Racer.skid = getCarSpeed(Model.skid.min, Model.skid.max)
    return Racer
}

function writeSpecs() {
    let ednaMin = document.querySelector('.edna-min')
    let jucaMin = document.querySelector('.juca-min')
    let pedroMin = document.querySelector('.pedro-min')
    
    ednaMin.innerHTML = ednasCar.min_speed
    jucaMin.innerHTML = jucasCar.min_speed
    pedroMin.innerHTML = pedrosCar.min_speed
    
    let ednaMax = document.querySelector('.edna-max')
    let jucaMax = document.querySelector('.juca-max')
    let pedroMax = document.querySelector('.pedro-max')
    
    ednaMax.innerHTML = ednasCar.max_speed
    jucaMax.innerHTML = jucasCar.max_speed
    pedroMax.innerHTML = pedrosCar.max_speed
    
    let ednaSkid = document.querySelector('.edna-skid')
    let jucaSkid = document.querySelector('.juca-skid')
    let pedroSkid = document.querySelector('.pedro-skid')
    
    ednaSkid.innerHTML = ednasCar.skid
    jucaSkid.innerHTML = jucasCar.skid
    pedroSkid.innerHTML = pedrosCar.skid
}

let pedrosCar
let jucasCar 
let ednasCar 

function startRace(raceMode) {
    let p = document.querySelector('#winner')
    
    let pedrosLaps = 0
    let jucasLaps = 0
    let ednasLaps = 0
    
    pedrosCar = buildCar()
    jucasCar = buildCar()
    ednasCar = buildCar()

    writeSpecs()

    let pedrosSpeed
    let jucasSpeed 
    let ednasSpeed 

    for (let i = 0; i < raceMode; i++) {
        pedrosSpeed = getRealSpeed(getCarSpeed(pedrosCar.min_speed, pedrosCar.max_speed), pedrosCar.skid)
        jucasSpeed = getRealSpeed(getCarSpeed(jucasCar.min_speed, jucasCar.max_speed), jucasCar.skid)
        ednasSpeed = getRealSpeed(getCarSpeed(ednasCar.min_speed, ednasCar.max_speed), ednasCar.skid)
        if (pedrosSpeed >= jucasSpeed && pedrosSpeed >= ednasSpeed) {
            pedrosLaps++
        } else if (jucasSpeed >= pedrosSpeed && jucasSpeed >= ednasSpeed) {
            jucasLaps++
        } else if (ednasSpeed >= pedrosSpeed && ednasSpeed >= jucasSpeed) {
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