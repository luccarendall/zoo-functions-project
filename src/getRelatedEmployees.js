const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((gerente) => gerente.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((worker) => worker.managers.includes(managerId))
    .map((relatedEmployees) => `${relatedEmployees.firstName} ${relatedEmployees.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
// Referências: https://abre.ai/dTqm e https://abre.ai/dTqp
