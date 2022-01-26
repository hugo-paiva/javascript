const allWorkers = require('../workers.json')
const fs = require('fs')

function addWorker(newWorker) {
    const newDatabase = [...allWorkers, newWorker]
    const newDatabaseString = JSON.stringify(newDatabase, null, 2)
    fs.writeFile(`workers.json`, newDatabaseString, (err, data) => {
        if (err) {
            console.log(`O erro foi do tipo ${err}`)
        }
    })
}

module.exports = addWorker