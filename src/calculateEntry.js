const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  return ((visitors.child * data.prices.child)
    + (visitors.adult * data.prices.adult)
      + (visitors.senior * data.prices.senior));
}

module.exports = { calculateEntry, countEntrants };
// Referência: https://abre.ai/dTqs
