# Aplicativo de Gestão de Receitas

Este é um aplicativo de gestão de receitas criado com **Next.js** e **TypeScript**. O objetivo do projeto é fornecer uma interface para os usuários visualizarem, criarem, atualizarem e excluírem receitas de maneira simples e intuitiva.

## Funcionalidades

- **Listagem de receitas**: Os usuários podem visualizar uma lista de receitas com títulos.
- **Detalhes da receita**: Ao clicar no título de uma receita, os usuários podem ver os detalhes completos da receita, incluindo:
  - Título da receita
  - Tipo de refeição (café da manhã, almoço, jantar, lanche)
  - Número de pessoas que a receita serve
  - Nível de dificuldade (iniciante, intermediário, avançado)
  - Lista de ingredientes e suas quantidades
  - Etapas de preparação
- **Cadastro de novas receitas**: O usuário pode criar novas receitas, incluindo ingredientes e etapas de preparo.
- **Edição de receitas**: O usuário pode editar uma receita existente.
- **Exclusão de receitas**: O usuário pode excluir receitas que não deseja mais.

## API Utilizada

A aplicação utiliza uma API mockada fornecida pelo **MockAPI** para armazenar, atualizar, excluir e recuperar os dados das receitas.

**URL da API**: [MockAPI - Receitas](https://67446b56b4e2e04abea2237b.mockapi.io/api/t1/receitas)

## Tecnologias Utilizadas

- **Next.js**: Framework para desenvolvimento de aplicações React com renderização do lado do servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **CSS**: Utilizado para estilizar a aplicação de maneira simples e responsiva.

## Estrutura do Projeto

A estrutura do projeto segue a convenção do Next.js e foi organizada para facilitar o entendimento e manutenção do código:

### Descrição dos principais arquivos:

- **`pages/index.tsx`**: Página inicial que exibe uma lista de receitas.
- **`pages/receita/[id].tsx`**: Exibe os detalhes de uma receita, com a opção de editar ou excluir.
- **`pages/receita/nova.tsx`**: Formulário para criar uma nova receita.
- **`pages/receita/editar/[id].tsx`**: Formulário para editar uma receita existente.
- **`components/Layout.tsx`**: Componente de layout que envolve todas as páginas, proporcionando uma estrutura consistente.
- **`components/RecipeCard.tsx`**: Componente que exibe informações básicas de uma receita (usado na lista de receitas).

## Instruções de Instalação e Execução

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Se não tiver, você pode baixar a versão mais recente [aqui](https://nodejs.org/).

### Passos para rodar a aplicação:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git


