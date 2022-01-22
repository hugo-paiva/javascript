const allWorkers = require('../workers.json')

function sortRamals(x, y){
    if (x.ramal < y.ramal) {return -1;}
    if (x.ramal > y.ramal) {return 1;}
    return 0;
}
const listOfWorkersByRamal = allWorkers.sort(sortRamals);

module.exports = listOfWorkersByRamal