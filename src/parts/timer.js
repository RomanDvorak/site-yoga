function timer() {
  // timer
  let deadline = '2018-11-11';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60).toString(),
        minutes = Math.floor(t / 1000 / 60 % 60).toString(),
        hours = Math.floor(t / (1000 * 60 * 60)).toString();

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;