let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let result = document.querySelector('#result')

let turn = 'O'

function areYouWinning() {
    for (let i = 0; i < 3; i++){
        if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            result.innerHTML = `${matrix[i][0]} VENCEU`
        }
    }

    for (let j = 0; j < 3; j++){
        if (matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j]) {
            result.innerHTML = `${matrix[0][j]} VENCEU`
        }
    }

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
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let temp = document.querySelector(`#p${i}${j}`)
            temp.innerHTML = ''
            
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
function mark1() {
    if (matrix[0][0] == 'O' || matrix[0][0] == 'X') {
        return
    }
    matrix[0][0] = turn
    document.querySelector('#p11').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark2() {
    if (matrix[0][1] == 'O' || matrix[0][1] == 'X') {
        return
    }
    matrix[0][1] = turn
    document.querySelector('#p12').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark3() {
    if (matrix[0][2] == 'O' || matrix[0][2] == 'X') {
        return
    }
    matrix[0][2] = turn
    document.querySelector('#p13').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark4() {
    if (matrix[1][0] == 'O' || matrix[1][0] == 'X') {
        return
    }
    matrix[1][0] = turn
    document.querySelector('#p21').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark5() {
    if (matrix[1][1] == 'O' || matrix[1][1] == 'X') {
        return
    }
    matrix[1][1] = turn
    document.querySelector('#p22').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark6() {
    if (matrix[1][2] == 'O' || matrix[1][2] == 'X') {
        return
    }
    matrix[1][2] = turn
    document.querySelector('#p23').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark7() {
    if (matrix[2][0] == 'O' || matrix[2][0] == 'X') {
        return
    }
    matrix[2][0] = turn
    document.querySelector('#p31').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark8() {
    if (matrix[2][1] == 'O' || matrix[2][1] == 'X') {
        return
    }
    matrix[2][1] = turn
    document.querySelector('#p32').innerHTML = turn
    changeTurn()
    areYouWinning()
}
function mark9() {
    if (matrix[2][2] == 'O' || matrix[2][2] == 'X') {
        return
    }
    matrix[2][2] = turn
    document.querySelector('#p33').innerHTML = turn
    changeTurn()
    areYouWinning()
}
