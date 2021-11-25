function checkBread() {
    if (document.querySelector('#frances').checked) {
        document.querySelector('p').innerHTML = 'animal'
    } else if (document.querySelector('#australiano').checked) {
        document.querySelector('p').innerHTML = 'guepardo'
    } else (document.querySelector('#brioche').checked) 
        document.querySelector('p').innerHTML = 'vaca'
    }
