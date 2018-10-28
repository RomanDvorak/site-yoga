function calc() {
  // Calc
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function () {
    persons.value = persons.value.replace(/\D/g, '');
  });
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || persons.value == '0' || restDays.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      let selectedPlace = place.options[place.selectedIndex].value;
      totalValue.innerHTML = a * selectedPlace;
    }
  });
  restDays.addEventListener('input', function () {
    restDays.value = restDays.value.replace(/\D/g, '');
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      let selectedPlace = place.options[place.selectedIndex].value;
      totalValue.innerHTML = a * selectedPlace;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '' || persons.value == '0' || restDays.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      let selectedPlace = place.options[place.selectedIndex].value;
      totalValue.innerHTML = a * selectedPlace;
    }
  });
}

module.exports = calc;