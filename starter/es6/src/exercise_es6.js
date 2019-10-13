// 1º exercício
// Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// extender uma segunda classe chamada "Usuario".
// A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
// repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

// Exercicio 2

const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
        { nome: 'Nathalia', idade: 26, empresa: 'Google' },
   ];
   
   
// Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
console.log(usuarios.map(usuario => usuario.idade));


// Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const filter = usuarios.filter(function(usuario){
    return usuario.empresa === 'Rocketseat' && usuario.idade > 18
});

console.log(filter);


// Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const find = usuarios.find(function(usuario){
    return usuario.empresa === 'Google';
});

console.log(find);


// Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

var map = usuarios
.map(usuario => usuario.idade * 2)
.filter(new_age => new_age <= 50);

console.log(map);


// Exercício 3, converter as funções em arrow functions

// 3.1

const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

console.log(arr.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {
    return usuario.idade;
};

console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const name = "Diego";
const age = 23;
const mostraUsuario = (name = 'Diego', age = 18) => name + ' ' + age;
console.log('exercicio', mostraUsuario(name, age));

// 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
//    }

const promise = () => {
    new Promise((resolve, reject) => {
        resolve();
    })
}




// Exercício 4

// Desestruturação simples
// A partir do seguinte objeto:

const empresa = 
{
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
const { nome } = empresa;
const { endereco: { cidade } } = empresa;
const { endereco: { estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio 
console.log(estado); // SC


// 4.2 Desestruturação em parâmetros
// Na seguinte função:
// function mostraInfo(usuario) {
//  return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })
// // Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// // separadamente e a função poder retornar apenas:
// return `${nome} tem ${idade} anos.`;

function mostraInfo({ nome, idade}) {
 return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// 5º Exercício
// Utilizando o operador de rest/spread (...) realize as seguintes operações:
// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// // function soma...
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

const arr5 = [1, 2, 3, 4, 5, 6];
const [x, ...y ] = arr5;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.2 Spread
// A partir do objeto e utilizando o operador spread:
const usuario5 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuario52 = { ...usuario5, nome: 'Gabriel'};
const usuario521 = { ...usuario5, cidade: 'Lontras'};
console.log(usuario52);
console.log(usuario521);

// 6º Exercício
// Converta o seguinte trecho de código utilizando Template Literals:
const usuario6 = 'Diego';
const idade6 = 23;
console.log(`O usuário ${usuario6} possui ${idade6} anos`);

// 7º exercício
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome7 = 'Diego';
const idade7 = 23;
const usuario7 = {
    nome7,
    idade7,
    cidade: 'Rio do Sul',
};
console.log(usuario7);
