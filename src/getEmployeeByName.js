const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) { // resolução parecida com o requisito 1. Usando find no lugar do filter.
  if (employeeName === undefined) {
    return {};
  }

  return employees
    .find((worker) => worker.firstName === employeeName || worker.lastName === employeeName);
}

module.exports = getEmployeeByName;
