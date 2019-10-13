
// // Promises não fazem parte do ES
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// minhaPromise().then(response => {
//     console.log('Promise sem async', response);
// })
// .catch(err => {

// });

// const minhaPromise2 = async () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 4000);
// });

// async function executaPromise(){
//     console.log('Promise 1 com async ', await minhaPromise());
//     console.log('Promise 3 com async ', await minhaPromise2());
//     console.log('Promise 2 com async ', await minhaPromise());
    
// } 

// executaPromise();

// // npm install @babel/plugin-transform-async-to-generator
// // npm install @babel/polyfill -D
// // adicionar o .babelrc plugins "@babel/plugin-transform-async-to-generator"
// // e no arquivo webpack.config colocar entry: ['@babel/polyfill', './src/main.js']

// const executaPromise2 = async () => {
//     console.log(await minhaPromise());
// }

// executaPromise2();

async function minhaPromise(){
    await setTimeout(() => console.log('promise 1'), 4000);
}
async function minhaPromise2(){
    await setTimeout(() => console.log('promise 2'), 1000);
}

minhaPromise();
minhaPromise2();


