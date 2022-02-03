const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animal = data.species.find((element) => element.name === animal); // Recebe o nome de uma espécie e uma idade
  return animal.residents.every((eachAnimal) => eachAnimal.age >= age); // Retorna os animais que possuem a idade mínima especificada

}

module.exports = getAnimalsOlderThan;
