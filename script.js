let discoClicado = null;
let moverDisco = false;
let divClass = null;


let torre1 = document.getElementsByClassName('torre1')[0]
torre1.addEventListener('click', function(e) {
    if (moverDisco === false && e.currentTarget.childElementCount !== 0) {
        discoClicado = e.currentTarget.firstElementChild;
        divClass = e.currentTarget;
        e.currentTarget.className += ' selected';
        moverDisco = !moverDisco;
    } else if (moverDisco === true && e.currentTarget.childElementCount === 0 || discoClicado.clientWidth < e.currentTarget.firstElementChild.clientWidth) {
        torre1.insertBefore(discoClicado, torre1.firstChild)
        divClass.classList.remove('selected')
        moverDisco = !moverDisco;
    }
})

let torre2 = document.getElementsByClassName('torre2')[0]
torre2.addEventListener('click', function(e) {
    if (moverDisco === false && e.currentTarget.childElementCount !== 0) {
        discoClicado = e.currentTarget.firstElementChild;
        divClass = e.currentTarget;
        e.currentTarget.className += ' selected';
        moverDisco = !moverDisco;
    } else if (moverDisco === true && e.currentTarget.childElementCount === 0 || discoClicado.clientWidth < e.currentTarget.firstElementChild.clientWidth) {
        torre2.insertBefore(discoClicado, torre2.firstChild)
        divClass.classList.remove('selected')
        moverDisco = !moverDisco;
    }

})

let torre3 = document.getElementsByClassName('torre3')[0]
torre3.addEventListener('click', function(e) {
    if (moverDisco === false && e.currentTarget.childElementCount !== 0) {
        discoClicado = e.currentTarget.firstElementChild;
        divClass = e.currentTarget;
        e.currentTarget.className += ' selected';
        moverDisco = !moverDisco;
    } else if (moverDisco === true && e.currentTarget.childElementCount === 0 || discoClicado.clientWidth < e.currentTarget.firstElementChild.clientWidth) {
        torre3.insertBefore(discoClicado, torre3.firstChild)
        divClass.classList.remove('selected')
        moverDisco = !moverDisco;
    }
    if (checkTower3()) {
        winnner()
    }
})

function checkTower3() {
    
    torre3 = document.getElementById('towerC');
        if (torre3.childElementCount === 4) {
            return true
        }
}
    
checkTower3()
    
function winnner() {
    
    let result = document.getElementById("result");
    let resultGame = document.createElement("h4");
        resultGame.innerHTML = "You WON!";
        result.appendChild(resultGame);
}