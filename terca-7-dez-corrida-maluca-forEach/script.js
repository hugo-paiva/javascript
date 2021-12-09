const COMPETITORS = {
    popular: {
        max_speed: { min: '180', max: '200' },
        min_speed: { min: '110', max: '130' },
        skid: { min: '3', max: '4' },
        level: 0,
        points: 0
    },
    sport: {
        max_speed: { min: '195', max: '215' },
        min_speed: { min: '125', max: '145' },
        skid: { min: '2', max: '3' },
        level: 0,
        points: 0
    },
    supersport: {
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
    Racer.max_speed = getCarSpeed(Model.max_speed.min, Model.max_speed.max)
    Racer.min_speed = getCarSpeed(Model.min_speed.min, Model.min_speed.max)
    Racer.skid = getCarSpeed(Model.skid.min, Model.skid.max)
    Racer.points = Model.points
    Racer.level = Model.level
    Racer.pilot = pilot
    return Racer
}

function writeSpecs() {
    let ednaLevel = document.querySelector('#edna-level')
    let jucaLevel = document.querySelector('#juca-level')
    let pedroLevel = document.querySelector('#pedro-level')

    ednaLevel.innerHTML = ednasCar.level
    jucaLevel.innerHTML = jucasCar.level
    pedroLevel.innerHTML = pedrosCar.level

    let ednaMin = document.querySelector('.edna-min')
    let jucaMin = document.querySelector('.juca-min')
    let pedroMin = document.querySelector('.pedro-min')

    ednaMin.innerHTML = ednasCar.min_speed.toFixed(2)
    jucaMin.innerHTML = jucasCar.min_speed.toFixed(2)
    pedroMin.innerHTML = pedrosCar.min_speed.toFixed(2)

    let ednaMax = document.querySelector('.edna-max')
    let jucaMax = document.querySelector('.juca-max')
    let pedroMax = document.querySelector('.pedro-max')

    ednaMax.innerHTML = ednasCar.max_speed.toFixed(2)
    jucaMax.innerHTML = jucasCar.max_speed.toFixed(2)
    pedroMax.innerHTML = pedrosCar.max_speed.toFixed(2)

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
            car.max_speed *= ((car.level / 100) + 1)
            car.min_speed *= ((car.level / 100) + 1)
        }
        if (car.level == 10) {
            setMaxLevelBackground(car)
        }
    }
    function setMaxLevelBackground(car) {
        const BACKGROUND = document.querySelector('#racer-pedro')
        const BACKGROUNDjuca = document.querySelector('#racer-juca')
        const BACKGROUNDedna = document.querySelector('#racer-edna')
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