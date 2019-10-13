import axios from 'axios';

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {

    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s')

}

umPorSegundo();

// async function getUserFromGithub(user) {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data);
//     }catch(err){
//         console.log('Usuário não existe');
//     }
// }
// function getUserFromGithub(user) {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//     console.log(response.data);
//  })
//  .catch(err => {
//     console.log('Usuário não existe');
//  })
// }

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');