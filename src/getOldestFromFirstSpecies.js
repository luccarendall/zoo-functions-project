const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeId = data.employees.find((employee) => employee.id === id); // Recebe o id de um funcionário
  const firstAnimal = employeeId.responsibleFor[0];
  const research = data.species.find((specie) => specie.id === firstAnimal); // Encontra a primeira espécie gerenciada pelo funcionário

  const oldest = research.residents.sort((a, b) => b.age - a.age); // Verifica a diferença entre a idade das espécies passadas como parâmetros a e b
  const result = oldest.map((animal) => [animal.name, animal.sex, animal.age])[0]; // Usa a diferença das idades para encontrar o mais velho e coloca isso mais o sexo e o nome do animal em um único array que vai ser retornado ao final
  return result;
}

module.exports = getOldestFromFirstSpecies;
