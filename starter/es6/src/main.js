import axios from 'axios';

alert("Teste");

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err){
            console.log('Erro na API');
        }
    }
}
Api.getUserInfo('nathaliacristina20');
Api.getUserInfo('nathaliacristina205');

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err){
        console.log('Usuário não existe');
    }
}
// function getUserFromGithub(user) {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//     console.log(response.data);
//  })
//  .catch(err => {
//     console.log('Usuário não existe');
//  })
// }

getUserFromGithub('nathaliacristina20');
getUserFromGithub('diego3g124123');

class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log('Repositório não existe');
        })
    }
}

Github.getRepositories('rocketseat');
Github.getRepositories('rocketseat/dslkvmskv');

   