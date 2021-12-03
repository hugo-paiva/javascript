let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let result = document.querySelector('#result')
let turn = 'O'

function areYouWinning() {
    //Checando colunas
    for (let i = 0; i < 3; i++){
        if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            result.innerHTML = `${matrix[i][0]} VENCEU`
        }
    }
    
    //Checando linhas
    for (let j = 0; j < 3; j++){
        if (matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j]) {
            result.innerHTML = `${matrix[0][j]} VENCEU`
        }
    }
    
    //Checando diagonais
    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        result.innerHTML = `${matrix[0][0]} VENCEU`
    }
    
    if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
        result.innerHTML = `${matrix[0][2]} VENCEU`
    }
}

function reboot() {
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    result.innerHTML = ''
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let temp = document.querySelector(`#p${i}${j}`)
            temp.innerHTML = ' '
            
    }
}
}

function changeTurn() {
    if (turn == 'X'){
        turn = 'O'
    } else {
        turn = 'X'
    }
}

function markPosition(i, j) {
    // IF para desconsiderar itens já marcados caso clique novamente
    if (matrix[i][j] == 'O' || matrix[i][j] == 'X') {
        return
    }
    matrix[i][j] = turn
    document.querySelector(`#p${i}${j}`).innerHTML = turn
    changeTurn()
    areYouWinning()
}

function mark1() {markPosition(0, 0)}
function mark2() {markPosition(0, 1)}
function mark3() {markPosition(0, 2)}
function mark4() {markPosition(1, 0)}
function mark5() {markPosition(1, 1)}
function mark6() {markPosition(1, 2)}
function mark7() {markPosition(2, 0)}
function mark8() {markPosition(2, 1)}
function mark9() {markPosition(2, 2)}
