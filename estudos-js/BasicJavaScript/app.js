// var nome="";

// if(nome = "") {
//     nome = prompt("Digite seu nome: ");
//     let sobrenome = "Guimarães";
//     console.log("Seu nome é " + " " + nome + " " + sobrenome);
// }

function showJsText() {
    const element = document.getElementsByClassName("");
    element.textContent="Aqui é js viu.";
}

let dinamicName = "";
dinamicName = prompt('Digite seu nome:');
console.log(dinamicName);

function entrar() {
    let area = document.getElementById("area");
    let texto = "Bem-vindo, " + " " + prompt("Qual o seu nome?");
    area.innerHTML=texto;
}

function entrarDinamicamente(identificacao) {
    let dinamicSelection = document.getElementById(identificacao);
    let texto = "Bem-vindo, " + " " + prompt("Qual o seu nome?");
    dinamicSelection.innerHTML=texto;
}

function enterUsingExistingName(){
    let login = document.getElementById('entryName');
    login.innerHTML="Você entrou como: " + dinamicName;
}

function modificarTexto(texto) {
    let textoModificado = document.getElementById("modificado");
    textoModificado.innerHTML = texto;
}

function modificarTextoDinamicamente(elementoModificado) {
    let textoModificado = document.getElementById(elementoModificado);
    let modificado = prompt("Digite o texto a ser modificado: ");
    textoModificado.innerHTML=modificado;
}

/*
* OBJETOS
*/

const Person = {
    name: "Luan",
    lastName: "Guimarães",
    age: 32,
    gender: "masculino"
};

// função que funciona como construtor
function CreatePersons(name, lastName, age, gender) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

const luanzinho = new createPersons("Luan", "Guimarães", 21, "Male");
const caiozinho = new createPersons("Caio", "Amorim", 21, "Male");
const enzinho = new createPersons("Enzo", "Cala", 22, "Male");
const netinho = new createPersons("João", "Neto", 20, "Male");
const joao = new createPersons("João", "Bispo", 21, "Male");

/*
* Arrays
*/

let amigos = ['Caio', 'Enzo', 'Neto', 'João'];
let firstItem = amigos[0];
let lastItem = amigos[amigos.length-1];

//criar um array utilizando uma função (na verdade cria um objeto: {0: "", 1:"", ee o tc}):
//métodos de array do javaScript não funcionam 
//é um objeto disfarçado
function CreateArray(n) {
    this.length = n;

    for(let i = 0; i<=n; i++) {
        this[i]="";
    }
}

const ClientArray = new CreateArray(50);
ClientArray[0] = luanzinho;

//fazendo isso com uma lista(array) normal:
const ClintListFinal = [];
ClintListFinal.push(luanzinho);
ClintListFinal.push(caiozinho);
ClintListFinal.push(enzinho);
ClintListFinal.push(netinho);
ClintListFinal.push(joao);

ClintListFinal.shift() //remove do início
ClintListFinal.indexOf(caio) //retorna no índice 1

//iterando:

for(item in ClintListFinal) {
    console.log("Cliente: " + ClintListFinal[item]);
}

//switch aqui:

switch (expressão) {
  case "oi":
    console.log("Olá");
    break;

  case "bom dia":
    console.log("Bom dia.");
    break;

  default:
    console.log("Boa noite!");
    break;
}
