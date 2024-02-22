function circulo() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
    figura2.innerHTML = "CIRCULO"
}

function rectangulo(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
    figura2.innerHTML = "rectangulo"
}

function luna(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("luna");
    figura2.innerHTML = "luna"
}
function estrella(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("estrella");
    figura2.innerHTML = "estrella"
}
function triangulo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("triangulo");
    figura2.innerHTML = "triangulo"
}
function degradado(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("degradado");
    figura2.innerHTML = "degradado"
}
function gif(){
    let figura =document.getElementById("figura");
    figura.classList.toggle("gif");
    figura2.innerHTML = "gif"
}

function moveTop(){
    let figura = document.getElementById("figura");
    alert("Vas moviendo la figura hacia arriba.");
    figura.classList.toggle("top");
    figura2.innerHTML = "top"
}

function moveBottom(){
    let figura = document.getElementById("figura");
    alert("Estas moviendo la figura hacia abajo.");
    figura.classList.toggle("Bottom");
    figura2.innerHTML = "bottom"
}

function moveLeft(){
    let figura = document.getElementById("figura");
    alert("Estas moviendo la figura hacia la izquierda.");
    figura.classList.toggle("Left");
    figura2.innerHTML = "left"
}

function moveRight(){
    let figura = document.getElementById("figura");
    alert("Estas moviendo la figura hacia la derecha.");
    figura.classList.toggle("Right");
    figura2.innerHTML = "right"
}

function Diagonal(){
    let figura = document.getElementById("figura");
    alert("Estas moviendo la figura en diagonal.");
    figura.classList.toggle("Diagonal");
    figura2.innerHTML = "Diagonal"
}

function fondo(){
    let body = document.body
    alert("vas a  cambiar de fondo.");
    ejemplo.classList.toggle("fondo");
    figura2.innerHTML = "fondo"
}
function PanelLateral(){
    let panel= document.getElementById("Panel-lateral");
    panel.classList.toggle("active"); 
    figura2.innerHTML = "Panel lateral"
}
function Panelsuperior(){
    let panel= document.getElementById("Panel-superior");
    panel.classList.toggle("active"); 
    figura2.innerHTML = "Panel superior"
}
function fondo2(){
    let color= prompt("Que color deseas: ");
    let elija=document.getElementById("ejemplo");

    elija.style.background=color; 
}


