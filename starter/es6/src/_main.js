class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    
    constructor(){
        super();
        this.usuario = "Nathalia";
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

}

const MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
};

MinhaLista.mostraUsuario();

// Metodos estaticos não dependem de informações das classes, não precisa dar new, nem passa pelo constructor.
// class TodoList{

//     constructor(){
//         this.todos = [];
//     }

//     static addTodo(){
//         this.todos.push("Novo todo");
//     }

// }

// variaveis let são variaveis de escopo
// Com o const dá para fazer a mutação de uma variável

// var arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.map(function(item, index){
//     return item + index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next){
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item){
//     return item === 4;
// });

// console.log(find);

// O melhor lugar para usar arrow functions são em funções anônimas
var arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map(item => item * 2);

const teste  = () => "Teste";
const teste2 = () => ({nome: "Teste"});

// Desestruturação

const usuario ={
    nome: 'Nathalia',
    idade: 26,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    }
}

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome }){
    console.log(nome);
}

mostraNome(usuario);

//rest
// yarn add @babel/plugin-proposal-object-rest-spread

const user = {
    name: 'Nathalia',
    age: 26,
    enterprise: "Accenture"
}

const { name, ...resto } = user;
console.log(resto);

const numeros = [1, 2, 3, 4];
const [a, b, ...c ] = numeros;
console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params;
}

console.log(soma(1, 2, 3));

// SPREAD

const usuario1 = {
    nome: "Nathalia",
    idade: 26,
    empresa: 'Accenture'
}

const usuario2 = { ...usuario1, nome: 'Cristina' };
console.log(usuario2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Object short syntax

const nome4  = "Nathalia";
const idade4 = 26;

const usuario4 = {
    nome4, 
    idade4,
    empresa: 'Accenture'
}

// yarn add webpack webpack-cli -D
// yarn add babel-loader
//"dev": "babel ./main.js -o ./bundle.js -w"

import { somaNumeros } from './funcoes';
// somaNumeros as novoNome
console.log(somaNumeros(2, 2));

import banana from './soma';
console.log(banana(2, 2));

// importa todas funcoes
// import * as funcoes from './funcoes.js
// funcoes.somaNumeros