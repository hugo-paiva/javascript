const express = require('express')
const PORT = 3000
const app = express()

// Adding components that I have created
const birthdayPeopleOfTheMonth = require('./components/birthday-people.js')
const listWorkersBySection = require('./components/section.js')
const listOfWorkersByRamal = require('./components/ramal.js')
const addWorker = require('./components/addWorker.js')
const calculator = require('./components/calculator/calculator-factory-function')

const cors = require('cors')

const configCors = {
    origin: "http://localhost:8080",
    Credential: true,
    optionSuccessStatus: 200
};

// Adding middlewares
app.use(cors(configCors));
app.use(express.json())

app.get('/section/:value', (req, res) => {
    const sectionValue = req.params.value
    res.json(listWorkersBySection(sectionValue))
})

app.get('/birthday/:num', (req, res) => {
    const month = req.params.num
    res.json(birthdayPeopleOfTheMonth(month))
})

app.get('/ramal', (req, res) => res.json(listOfWorkersByRamal))

app.post('/add-worker', (req, res) => {
    const data = req.body
    addWorker(data)
})

app.get('/calculate/:operand1/:operation/:operand2', (req, res) => {
    const operand1 = Number(req.params.operand1)
    const operand2 = Number(req.params.operand2)
    const operation = req.params.operation
    
    const myCalc = calculator(operand1, operand2)
    myCalc.setOperation(operation)
    res.send(String(myCalc.getResult()))
})

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}!`))