const allWorkers = require('../workers.json')

function listWorkersBySection(_section, _json = allWorkers) {
    const data = _json
    const listOfWorkers = data.filter(person => person.section == _section )
    return listOfWorkers
}

module.exports = listWorkersBySection