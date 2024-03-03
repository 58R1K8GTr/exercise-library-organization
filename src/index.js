const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  // escreva seu código aqui
  const result = books
    .filter(({ genre }) => ['Fantasia', 'Ficção Científica'].includes(genre));
  return result;
};

// Requisito 2
const oldBooksOrdered = (year) => {
  // escreva seu código aqui
  const result = books
    .filter(({ releaseYear }) => year - releaseYear > 60)
    .sort(({ releaseYear }) => -releaseYear);
  return result;
};

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
  const result = books
    .filter(({ author: { birthYear: birth } }) => birth === birthYear)
    .map(({ name }) => name);
  return result;
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
  const result = books
    .filter(({ genre }) => ['Ficção Científica', 'Fantasia'].includes(genre))
    .map(({ author: { name } }) => name)
    .sort();
  return result;
};

// Requisito 5
const oldBooks = (year) => {
  // escreva seu código aqui
  const result = books
    .filter(({ releaseYear }) => year - releaseYear > 60)
    .map(({ name }) => name);
  return result;
};

// Requisito 6
const authorWith3DotsOnName = () => {
  // escreva seu código aqui
  const result = books
    .find(({ author: { name } }) => (name.match(/\./g)).length === 3).name;
  return result;
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
