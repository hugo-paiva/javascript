const express = require('express')
const app = express()
const PORT = 8080

app.use('/calculadora', express.static(__dirname + '/src/calculadora'))
app.use('/funcionarios', express.static(__dirname + '/src/funcionarios'))

app.listen(PORT, () => console.log(`Frontend server running on port ${PORT}`))