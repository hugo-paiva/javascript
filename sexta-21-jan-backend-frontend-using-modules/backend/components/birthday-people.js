const allWorkers = require('../workers.json')

function birthdayOfTheMonth(_month, _json = allWorkers) {
    let inputMonth = _month
    if (_month < 10) {
        inputMonth = '0' + _month
    }
    const data = _json
    const birthdayPeopleOfTheMonth = data.filter(person => {
        const birthMonth = person.birthdate.split('-')[1]
        return birthMonth == inputMonth
    })
    return birthdayPeopleOfTheMonth
}

module.exports = birthdayOfTheMonth