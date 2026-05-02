/*
* Temporização:
*/

//funções que são executadas de tempo em tempo -> Temporização
function acao() {
    document.write("<br><h1>Exexutando de tempos em tempos</h1>");
}

var time = setInterval(acao, 3000);

/*
* Web Storage:
*/

//localStorage = armazenamento em disco
//sessionStorage = armazenamento em memória

localStorage.setItem("name1", "Luan");
localStorage.setItem("name2", "Vitor");
localStorage.setItem("name3", "Ribeiro");
localStorage.setItem("name4", "Guimarães");

const names = ["Luan", "Caio", "Calado", "Neto", "João"];
 //utilizar json pois como localStorage só aceita string, ele salva mantendo a estrutura de lista dentro do localStorage
localStorage.setItem("names", JSON.stringify(names));

var nome = localStorage.getItem("nome");

if(nome === null) {
    nome = prompt("Qual o seu nome?");

    localStorage.setItem("nome", name)
}

document.getElementById('nome').innerHTML=nome;


/*
* Concatenação de variáveis em strings:
*/

var nome2 = "Luan";
var sobrenome2 = "Ribeiro";

console.log(`Meu nome é ${nome2} ${sobrenome2}`);

/*
* Desconstrução de Objetos e Arrays:
*/
let pessoa = {
    nome: "Luan",
    sobrenome: "Ribeiro",
    idade: 21
};

let nomePessoa = pessoa.nome;
let sobrenomePessoa = pessoa.sobrenome;
let idadePessoa = pessoa.idade;

console.log(`Meu nome é ${nomePessoa} ${sobrenomePessoa} e tenho ${idadePessoa} pessoa.`);

//se alguma propriedade não existir, vira undefined
//basicamente eu copio os valores do objeto
let {nome, sobrenome, idade} = pessoa2;

lista = ["Luan Vitor", "Manoel Junior"];

let [ primeiroNome, segundoNome ] = lista;

/*
* Spread operator:
*/

let primeiros = [1,2,3];
let numeros = [4,5,6];

for(let i in numeros) {
    primeiros.push(numeros[i]);
}

//traz os valores das 2 listas
let outros = [...primeiros, ...numeros]

//lista dentro de outra
let outros2 = [primeiros, ...numeros]

//utilizando em objetos
const pessoa2 = {
    nome: "Luan",
    cargo: "Engenheiro de Software",
    idade: 21
};

//recebe todos os atributos de pessoa
const novaPessoa2 = {
    ...pessoa2,
    nascimento: "Terra Nova",
    ano: 2004
};

/*
* Rest operator:
*/

//exibe somente o numero 4
function exibeNumeros(numeros) {
    console.log(numeros);
}

//exibe somente todos os numeros da lista
function exibeNumeros(...numeros) {
    console.log(numeros);
}

/*
* Operação em Array:
*/

//MAP (iterar sobre o array de forma simples)
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8];
const item = [];

numeros4.map((item, index) => {
    if(index %2 != 0) {
        indicesImpares.push(item);
    }
});

//REDUCE (pegar um array e transformar em um único valor)
const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8];
let soma = 0;
soma = numeros.reduce((total, valorAtual) => {
    return total + valorAtual;
});

console.log(soma);

let nomes = ["Luan", "Manoel"];

let resultado = nomes.reduce((acc, nome) => acc + " " + nome);

console.log(resultado); // "Luan Manoel"

//FIND (utilizado para encontrar)
const numeros6 = [1, 2, 3, 4, 5, 6, 7, 8];

let procurado = numeros6.find((item)=>{
    return item===6;
});

console.log(procurado);

/*
* Funções Anônimas:
*/

/*
se a função possui apenas uma linha de retorno, podemos excluir inclusive as chaves, a palavra reservada return e
o ponto e vírgula
*/  
const numeros7 = [1, 2, 3, 4, 5, 6, 7, 8]; 

let soma8 = 0;

soma = numeros7.reduce((total, valorAtual) => total+valorAtual);

/*
SOME:
vai executar a função até encontrar um retorno = true ou até avaliar
todos os itens do array
*/

const nomes=["Manoel", "Teresa", "Ricardo"];
let resultado = nomes.some(item => item==="Teresa");

console.log(resultado); //retorna true

console.log(nomes.some(item => item==="Maria")); //retorna false

/*
EVERY:
every vai retornar true se avaliar (função anônima retornando true) para todos os itens do array. só retorna true se todos os itens do array passar na condição
*/

const pessoas2 = [
 {nome:"Manoel", idade:44}, {nome:"Teresa", idade:8}, {nome:"Maria", idade:26}
];

let resultado = pessoas.every(pessoa => pessoa.idade>7)
console.log(resultado); //true

console.log(pessoas.every(pessoa => pessoa.idade>15));