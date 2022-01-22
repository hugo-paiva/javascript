const express = require('express')
const PORT = 3000
const app = express()
const birthdayPeopleOfTheMonth = require('./components/birthday-people.js')
const listWorkersBySection = require('./components/section.js')
const workersSortedByRamal = require('./components/ramal.js')

app.get('/birthday', (req, res) => res.send(birthdayPeopleOfTheMonth(7)))

app.get('/section', (req, res) => res.send(listWorkersBySection(9)))

app.get('/ramal', (req, res) => res.send(workersSortedByRamal))

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))