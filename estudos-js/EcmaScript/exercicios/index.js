var hello = document.getElementById("ola");
hello.innerHTML = "olá mundo";

// alert(2+2);

let divSelector = document.getElementById("name");

function showName() {
    let name = prompt("Qual o seu nome?");
    let input = document.getElementById("input");

    input.value = name;
}

// qtd-characters

function charactersQtd() {
    let input = document.getElementById("input");
    let inputValue = input.value.length;

    let pargraphSelector = document.getElementById("qtd-characters");

    pargraphSelector.innerHTML=inputValue;
}

function lampOnOff() {
    let selectImage = document.getElementById("imageLamp");

    if(selectImage.src.includes("lamp-off.jpeg")) {
        return selectImage.src="../assets/lamp-on.jpeg";
    }

    return selectImage.src="../assets/lamp-off.jpeg";
}

function lampOn(){
    return document.getElementById("imageLamp2").src="../assets/lamp-on.jpeg";
}

function lampOff() {
    return document.getElementById("imageLamp2").src="../assets/lamp-off.jpeg";
}

function greating() {
    let selectName = document.getElementById("first-name");
    let selectLastName = document.getElementById("last-name");

    alert(`Helo, ${selectName.value} ${selectLastName.value}!`);
}