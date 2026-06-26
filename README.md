# 📚 Organizando a Biblioteca

O **Organizando a Biblioteca** é um projeto em **JavaScript puro (ES6)** desenvolvido para simular o sistema de gerenciamento e catalogação de dados de uma biblioteca.

Neste projeto, o foco principal foi a manipulação de estruturas de dados complexas (arrays de objetos contendo dados de livros, gêneros e informações de autores) utilizando funções de alta ordem (**Higher Order Functions**) para filtragem, busca, mapeamento e ordenação de informações.

---

## 🚀 O que foi desenvolvido

Complementando o arquivo central `src/index.js`, implementei algoritmos lógicos para resolver os seguintes requisitos do sistema:

*   **fantasyOrScienceFiction:** Filtra a base de dados para retornar apenas os livros que pertencem aos gêneros de "Fantasia" ou "Ficção Científica".
*   **oldBooksOrdered:** Identifica livros publicados há no mínimo 60 anos com base em um ano limite passado por parâmetro e os ordena de forma cronológica (do mais velho para o mais novo).
*   **booksByAuthorBirthYear:** Faz uma busca cruzada para listar os nomes dos livros cujas pessoas autoras nasceram em um ano específico informado por argumento.
*   **fantasyOrScienceFictionAuthors:** Mapeia os autores de ficção científica ou fantasia e retorna um novo array contendo apenas seus nomes organizados em ordem alfabética.
*   **oldBooks:** Retorna uma lista de strings exclusivamente com o nome dos livros que possuem mais de 60 anos de publicação a partir de um ano de referência.
*   **authorWith3DotsOnName:** Localiza e retorna o título do primeiro livro cujo autor possua exatamente três iniciais pontuadas em seu nome registrado (ex: `J. R. R. Tolkien`).

---

## 🛠️ Tecnologias Utilizadas

*   **JavaScript (ES6):** Manipulação avançada de arrays de objetos e uso intensivo de métodos nativos (`.filter()`, `.map()`, `.find()`, `.sort()`).
*   **Node.js (v16):** Ambiente de execução utilizado localmente para o projeto.
*   **Jest:** Framework de testes automatizados responsável por avaliar a exatidão das funções desenvolvidas.
*   **ESLint:** Linter para análise estática de código, garantindo sua legibilidade, manutenibilidade e alinhamento com as boas práticas.

---

## 🔧 Como Instalar e Rodar o Projeto

Para testar o projeto localmente, certifique-se de que está utilizando a versão 16 do Node.js.

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/sd-040-exercise-library-organization.git](https://github.com/seu-usuario/sd-040-exercise-library-organization.git)
