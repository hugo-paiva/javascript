const allWorkers = require('../workers.json')

function birthdayOfTheMonth(_month, _json = allWorkers) {
    const data = _json
    const birthdayPeopleOfTheMonth = data.filter(person => {
        const birthMonth = person.birthDate.split('/')[1]
        return birthMonth == _month
    })
    return birthdayPeopleOfTheMonth
}

module.exports = birthdayOfTheMonth