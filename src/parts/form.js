function form() {
  // Form
  let message = {
    loading: '<div class="status-ico-div"><img src="icons/loading.svg" class="status-ico" alt="loading"><span class="status-ico-div-span">Идёт загрузка, подождите...</span></div>',
    success: '<div class="status-ico-div"><img src="icons/checked.svg" class="status-ico" alt="checked"><span class="status-ico-div-span">Заявка успешно оставлена, мы вам перезвоним!</span></div>',
    failure: '<div class="status-ico-div"><img src="icons/error.svg" class="status-ico" alt="fail"><span class="status-ico-div-span">Произошла ошибка, повторите попытку!</span></div>'
  };
  let popupForm = document.querySelector('.main-form'),
      popupInput = popupForm.getElementsByTagName('input'),
      form = document.querySelector('#form'),
      formInput = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  popupInput[0].addEventListener('input', function () {
    popupInput[0].value = popupInput[0].value.replace(/[^0-9+() ]/ig, '');
  });
  formInput[1].addEventListener('input', function () {
    formInput[1].value = formInput[1].value.replace(/[^0-9+() ]/ig, '');
  });
  statusMessage.classList.add('status');
  statusMessage.classList.add('status-ico-div');

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      let input = elem.getElementsByTagName('input');
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open("POST", 'server.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(data);
        });
      } // End postData


      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(() => statusMessage.innerHtml = message.loading).then(() => statusMessage.innerHTML = message.success).catch(() => statusMessage.innerHTML = message.failure).then(clearInput);
    });
  }

  sendForm(popupForm);
  sendForm(form);
}

module.exports = form;