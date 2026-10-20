# Visualizador de Perfil do GitHub

Aplicação web que consulta a API pública do GitHub e exibe informações de um perfil e seus repositórios. O projeto também serve como exercício de JavaScript moderno, com módulos ES, `async/await` e tratamento de erros.

## Funcionalidades

- Busca de usuários pelo nome de usuário do GitHub.
- Exibição do avatar, nome, biografia e contagens de seguidores e perfis seguidos.
- Listagem de até 10 repositórios, com estrelas, forks, observadores e linguagem.
- Estados de carregamento e tratamento de falhas na consulta.

## Tecnologias

HTML, CSS e JavaScript com módulos ES nativos. Não há dependências ou etapa de build configuradas.

## Como executar

Sirva os arquivos por um servidor HTTP local e abra a página no navegador. Por exemplo, use a extensão Live Server no Visual Studio Code.

## API utilizada

- Perfil: `GET https://api.github.com/users/{username}`
- Repositórios: `GET https://api.github.com/users/{username}/repos?per_page=10&sort=created`

## Estrutura

- `index.html`: estrutura da página e ponto de entrada da aplicação.
- `js/index.js`: eventos de busca e integração dos módulos.
- `js/githubApi.js`: chamadas à API do GitHub.
- `js/profileView.js`: renderização dos dados do perfil e dos repositórios.
- `css/`: estilos base, layout, responsividade e animações.
