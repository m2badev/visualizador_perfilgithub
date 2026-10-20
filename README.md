Projeto Visualizador de Perfil do GitHub

Contexto e objetivos de estudo: teste técnico real focado em JavaScript, usando IA para planejar desenvolvimento de funcionalidades que consomem APIs, com HTML e CSS, com foco total na lógica JavaScript moderna com módulos ES6, async/await e tratamento de erros.

Chamadas:
Prefil: GET /users/:username
Repositórios: GET /users/:username/repos (usando query per_page=10 e/ou sort=updated / sort=pushed conforme objetivo)

- Documentar o shape esperado do JSON (camps a serem lidos: avatar_url, name, bio, follwers, following, stargazers_count, forks_count, language);
