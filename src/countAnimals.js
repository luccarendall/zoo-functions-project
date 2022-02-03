const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    data.species.forEach((element) => {
      animals[element.name] = element.residents.length;
    });
    return animals;
  }

  const searchAnimal = data.species.find((element) =>
    element.name === animal.specie);

  if (animal.sex === undefined) {
    return searchAnimal.residents.length;
  }

  const sex = searchAnimal.residents.filter((element) =>
    element.sex === animal.sex);
  return sex.length;
}

module.exports = countAnimals;
// Referências: https://abre.ai/dTqu
