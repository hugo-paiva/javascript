matrix = [
    [1,3,7],
    [9,3,4],
    [8,7,9]
]

function printMatrix(_matrix) {
    let mtx = _matrix
    console.log(mtx[0])
    mtx.shift()
    if (mtx.length == 0) {
        return
    }
    return  printMatrix(mtx)
}

// printMatrix(matrix)

// Resolução número 2

function runMatrix(_matrix, _i = 0) {
    let mtx = _matrix
    let i = _i
    console.log(mtx[i].shift())
    if (mtx[i].length < 1){
        i++ 
    }
    if (!mtx[i]) {
        return
    }
    runMatrix(mtx, i)
}
let teste = [['manga', 'jaca', 'caramelo'],['creamchesse','frango','presunto']]
runMatrix(teste)