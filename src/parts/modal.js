function modal() {
  // Modal
  let isIE = false,
      isMob = false;

  if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
    // Проверяет, является браузер IE 10, IE 9, IE 11, Edge или нет
    isIE = true;
  }

  if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
    //Проверяет, является устройство мобильным или нет
    isMob = true;
  }

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  if (isMob || !isIE) {
    overlay.classList.remove('fade');
  }

  document.body.addEventListener('click', function (e) {
    if (e.target.classList == "description-btn") {
      overlay.style.display = 'block';

      if (!isIE && !isMob) {
        animFade(overlay);
      }
    } else if (e.target.classList == "more") {
      overlay.style.display = 'block';

      if (!isMob && isIE) {
        more.classList.add('more-splash');
      }

      document.body.style.overflow = 'hidden';

      if (!isIE && !isMob) {
        animFade(overlay);
      }
    }
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';

    if (!isMob && isIE) {
      more.classList.remove('more-splash');
    }

    document.body.style.overflow = '';
  });

  function animFade(elem) {
    let op = 0.1,
        id = requestAnimationFrame(fade);

    function fade() {
      if (op == 1) {
        clearInterval(id);
      } else {
        op += 0.1;
        elem.style.opacity = op;
        id = requestAnimationFrame(fade);
      }
    }
  }
}

module.exports = modal;