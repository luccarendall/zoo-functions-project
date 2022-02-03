const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// Antes de começar, analise o arquivo data/zoo_data.js, para ver os dados que serão usados.

function getSpeciesByIds(...ids) { // ... -> sintaxe de espalhamento (spread)
  if (ids === undefined) {
    const emptyArray = [];
    return emptyArray;
  }
  return species.filter((animal) => ids.includes(animal.id));
}

module.exports = getSpeciesByIds;
