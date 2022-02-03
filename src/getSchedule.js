const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const weekOpen = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];

// Status dos horários e dias disponíveis:
function weeklySchedule() {
  const zooStatus = {};
  weekOpen.forEach((day) => {
    if (day === 'Domingo') {
      zooStatus[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      const zooOpen = species.filter((animal) => animal.availability
        .find((days) => days === day))
        .map((eachSpecie) => eachSpecie.name);
      zooStatus[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: zooOpen,
      };
    }
  });
  return zooStatus;
}

// Função para parâmetro 'dia':
function scheduleDay(day) {
  const result = {
    [day]: weeklySchedule()[day],
  };
  return result;
}

// Função para parâmetro 'animal':
function scheduleAnimal(animal) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.availability;
}

// Função para tipo de parâmetro (Função auxiliar):
function type(param) {
  const animal = species.find((specie) => specie.name === param);
  const days = weekOpen.find((day) => day === param);

  // linter pediu para retirar os elses
  if (animal !== undefined) return 'animal';
  if (days !== undefined) return 'day';
  if (animal === undefined || days === undefined) return undefined;
}

// Função principal
function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return weeklySchedule();

  const target = type(scheduleTarget);

  if (target === 'animal') return scheduleAnimal(scheduleTarget);
  if (target === 'day') return scheduleDay(scheduleTarget);
  if (target === undefined) return weeklySchedule();
  return weeklySchedule();
}

module.exports = getSchedule;
// Referências: https://abre.ai/dTpW, https://abre.ai/dTpY, https://abre.ai/dTq4
