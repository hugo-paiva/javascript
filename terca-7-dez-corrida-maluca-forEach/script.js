const COMPETITORS = {
    popular: {
        type: 'popular',
        max_speed: { min: '180', max: '200' },
        min_speed: { min: '110', max: '130' },
        skid: { min: '3', max: '4' },
        level: 0,
        points: 0
    },
    sport: {
        type: 'sport',
        max_speed: { min: '195', max: '215' },
        min_speed: { min: '125', max: '145' },
        skid: { min: '2', max: '3' },
        level: 0,
        points: 0
    },
    supersport: {
        type: 'supersport',
        max_speed: { min: '210', max: '230' },
        min_speed: { min: '140', max: '160' },
        skid: { min: '1', max: '1.75' },
        level: 0,
        points: 0
    }
}

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

function buildCar(pilot) {
    let Model = {}
    let Racer = {}
    let possibilities = Math.random()
    if (possibilities <= 0.6) {
        Model = COMPETITORS.popular
    } else if (possibilities <= 0.85) {
        Model = COMPETITORS.sport
    } else {
        Model = COMPETITORS.supersport
    }
    Racer.pilot = pilot
    Racer.type = Model.type
    Racer.max_speed = getCarSpeed(Model.max_speed.min, Model.max_speed.max)
    Racer.min_speed = getCarSpeed(Model.min_speed.min, Model.min_speed.max)
    Racer.skid = getCarSpeed(Model.skid.min, Model.skid.max)
    Racer.improved_max_speed = Racer.max_speed 
    Racer.improved_min_speed = Racer.min_speed
    Racer.points = Model.points
    Racer.level = Model.level
    return Racer
    console.log(Model)
}

function writeSpecs() {
    let ednaLevel = document.querySelector('#edna-level')
    let jucaLevel = document.querySelector('#juca-level')
    let pedroLevel = document.querySelector('#pedro-level')

    ednaLevel.innerHTML = `${ednasCar.level} </br> Dirige um carro ${ednasCar.type}`
    jucaLevel.innerHTML = `${jucasCar.level} </br> Dirige um carro ${jucasCar.type}`
    pedroLevel.innerHTML = `${pedrosCar.level} </br> Dirige um carro ${pedrosCar.type}`

    let ednaMin = document.querySelector('.edna-min')
    let jucaMin = document.querySelector('.juca-min')
    let pedroMin = document.querySelector('.pedro-min')

    ednaMin.innerHTML = ednasCar.improved_min_speed.toFixed(2)
    jucaMin.innerHTML = jucasCar.improved_min_speed.toFixed(2)
    pedroMin.innerHTML = pedrosCar.improved_min_speed.toFixed(2)

    let ednaMax = document.querySelector('.edna-max')
    let jucaMax = document.querySelector('.juca-max')
    let pedroMax = document.querySelector('.pedro-max')

    ednaMax.innerHTML = ednasCar.improved_max_speed.toFixed(2)
    jucaMax.innerHTML = jucasCar.improved_max_speed.toFixed(2)
    pedroMax.innerHTML = pedrosCar.improved_max_speed.toFixed(2)

    let ednaSkid = document.querySelector('.edna-skid')
    let jucaSkid = document.querySelector('.juca-skid')
    let pedroSkid = document.querySelector('.pedro-skid')

    ednaSkid.innerHTML = ednasCar.skid.toFixed(2)
    jucaSkid.innerHTML = jucasCar.skid.toFixed(2)
    pedroSkid.innerHTML = pedrosCar.skid.toFixed(2)

    let ednaPoints = document.querySelector('#edna-points')
    let jucaPoints = document.querySelector('#juca-points')
    let pedroPoints = document.querySelector('#pedro-points')

    ednaPoints.innerHTML = ednasCar.points
    jucaPoints.innerHTML = jucasCar.points
    pedroPoints.innerHTML = pedrosCar.points

    console.log(ednasCar)
    console.log(jucasCar)
    console.log(pedrosCar)
}

let pedrosCar = buildCar("pedro")
let jucasCar = buildCar("juca")
let ednasCar = buildCar("edna")

let todayRacers = [pedrosCar, jucasCar, ednasCar]

let count = 0
let itsPlaying = false

writeSpecs()

function startRace(raceMode) {
    let p = document.querySelector('#winner')

    let pedrosLaps = 0
    let jucasLaps = 0
    let ednasLaps = 0

    let pedrosSpeed
    let jucasSpeed
    let ednasSpeed

    todayRacers.forEach(improve)

    for (let i = 0; i < raceMode; i++) {
        pedrosSpeed = getRealSpeed(getCarSpeed(pedrosCar.improved_min_speed, pedrosCar.improved_max_speed), pedrosCar.skid) 
        jucasSpeed = getRealSpeed(getCarSpeed(jucasCar.improved_min_speed, jucasCar.improved_max_speed), jucasCar.skid)
        ednasSpeed = getRealSpeed(getCarSpeed(ednasCar.improved_min_speed, ednasCar.improved_max_speed), ednasCar.skid)
        if (pedrosSpeed >= jucasSpeed && pedrosSpeed >= ednasSpeed) {
            pedrosLaps++
        } else if (jucasSpeed >= pedrosSpeed && jucasSpeed >= ednasSpeed) {
            jucasLaps++
        } else if (ednasSpeed >= pedrosSpeed && ednasSpeed >= jucasSpeed) {
            ednasLaps++
        }
        console.log(pedrosCar.points)
        console.log(jucasCar.points)
        console.log(ednasCar.points)
    }

    let pedro = document.querySelector('#pedro')
    let juca = document.querySelector('#juca')
    let edna = document.querySelector('#edna')
    pedro.innerHTML = `ganhou ${pedrosLaps} voltas`
    juca.innerHTML = `ganhou ${jucasLaps} voltas`
    edna.innerHTML = `ganhou ${ednasLaps} voltas`

    if (pedrosLaps >= jucasLaps && pedrosLaps >= ednasLaps) {
        p.innerHTML = `Pedro venceu com ${pedrosLaps} voltas`
        pedrosCar.points += 200
        if (jucasLaps > ednasLaps) {
            jucasCar.points += 120
            ednasCar.points += 50
        } else {
            ednasCar.points += 120
            jucasCar.points += 50
        }
    } else if (jucasLaps >= pedrosLaps && jucasLaps >= ednasLaps) {
        p.innerHTML = `Juca venceu com ${jucasLaps} voltas`
        jucasCar.points += 200
        if (pedrosLaps > ednasLaps) {
            pedrosCar.points += 120
            ednasCar.points += 50
        } else {
            ednasCar.points += 120
            pedrosCar.points += 50
        }
    } else {
        p.innerHTML = `Edna venceu com ${ednasLaps} voltas`
        ednasCar.points += 200
        if (pedrosLaps > jucasLaps) {
            pedrosCar.points += 120
            jucasCar.points += 50
        } else {
            jucasCar.points += 120
            pedrosCar.points += 50
        }
    }

    writeSpecs()

    function improve(car) {
        if (car.level < 10) {
            car.level = parseInt(car.points / 450)
            car.improved_max_speed = car.max_speed * ((car.level / 100) + 1)
            car.improved_min_speed = car.min_speed * ((car.level / 100) + 1)
        }
        if (car.level == 10) {
            setMaxLevelBackground(car)
        }
    }
    function setMaxLevelBackground(car) {
        const BACKGROUND = document.querySelector('#racer-pedro')
        const BACKGROUNDjuca = document.querySelector('#racer-juca')
        const BACKGROUNDedna = document.querySelector('#racer-edna')
        const AUDIO = new Audio("assets/audio/Ayrton Senna - Tema Da Vitoria . Jefferson CD`s Pancadão . Tel . ( 85 ) 8705-5671.mp3")
        if (!itsPlaying) {
            AUDIO.play()
            itsPlaying = true
        }
        if (car.pilot == "pedro") {
            BACKGROUND.style.backgroundImage = 'url(assets/img/png-transparent-flame-flame-flames-fire.png)'
        }
        if (car.pilot == "juca") {
            BACKGROUNDjuca.style.backgroundImage = 'url(assets/img/png-transparent-flame-flame-flames-fire.png)'
        }
        if (car.pilot == "edna") {
            BACKGROUNDedna.style.backgroundImage = 'url(assets/img/png-transparent-flame-flame-flames-fire.png)'
        }
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