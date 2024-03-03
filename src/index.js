const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  // escreva seu código aqui
  return books
    .filter(({ genre }) => ['Fantasia', 'Ficção Científica'].includes(genre));
};

// Requisito 2
const oldBooksOrdered = (year) => {
  // escreva seu código aqui
  return books
    .filter(({ releaseYear }) => year - releaseYear > 60)
    .sort(({ releaseYear }) => -releaseYear);
};

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
  return books
    .filter(({ author: { birthYear: birth } }) => birth === birthYear)
    .map(({ name }) => name);
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
  return books
    .filter(({ genre }) => ['Ficção Científica', 'Fantasia'].includes(genre))
    .map(({ author: { name } }) => name)
    .sort();
};

// Requisito 5
const oldBooks = (year) => {
  // escreva seu código aqui
  return books
    .filter(({ releaseYear }) => year - releaseYear > 60)
    .map(({ name }) => name);
};

// Requisito 6
const authorWith3DotsOnName = () => {
  // escreva seu código aqui
  return books
    .find(({ author: { name }}) => name.match(/\w\. \w\. \w\..*/)).name;
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
