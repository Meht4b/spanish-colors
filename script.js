var r = document.querySelector(':root')

function red(){

    r.style.setProperty('--grad-bg','red')
}

function yellow(){

    r.style.setProperty('--grad-bg','yellow')
}

function green(){

    r.style.setProperty('--grad-bg','green')
}

function orange(){

    r.style.setProperty('--grad-bg','orange')
}

function blue(){

    r.style.setProperty('--grad-bg','blue')
}

function gray(){
    r.style.setProperty('--grad-bg','gray')
}

document.getElementById("red").addEventListener("mouseover", red);
document.getElementById("red").addEventListener("mouseout", gray)

document.getElementById("blue").addEventListener("mouseover", blue);
document.getElementById("blue").addEventListener("mouseout", gray)

document.getElementById("orange").addEventListener("mouseover", orange);
document.getElementById("orange").addEventListener("mouseout", gray)

document.getElementById("green").addEventListener("mouseover", green);
document.getElementById("green").addEventListener("mouseout", gray)

document.getElementById("yellow").addEventListener("mouseover", yellow);
document.getElementById("yellow").addEventListener("mouseout", gray)
