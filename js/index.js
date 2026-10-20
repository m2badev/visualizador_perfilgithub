// Esse arquivo principal só faz a integração e manipula eventos e as chamadas dos outros arquivos js
// This main file only handles the integration and manages events and calls to the other JS files.
// Questo file principale gestisce esclusivamente l'integrazione e si occupa degli eventi e delle chiamate agli altri file JavaScript.

import { fetchGithubUser, fetchGithubUserRepos } from './githubApi.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function getUserProfile() {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        renderProfile(userData, userRepos, profileResults);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResults.innerHTML = "";
    }
}

btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getUserProfile();
    }
});
