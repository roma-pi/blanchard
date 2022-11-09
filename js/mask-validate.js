let priceInput = document.querySelectorAll(".publishings__price-input");
let priceMask = new Inputmask({
  mask: "9{0,3} [9{0,3}]",
  numericInput: true
});
priceMask.mask(priceInput);

let phoneInput = document.querySelector(".contacts__form-input[type='tel']");
let phoneMask = new Inputmask("+7 (999) 999-99-99");
phoneMask.mask(phoneInput);

new window.JustValidate('.contacts__form', {
  rules: {
    phone: {
      required: true,
      function: (name, value) => {
        const phone = phoneInput.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  messages: {
    name: 'Недопустимый формат',
    phone: 'Недопустимый формат'
  },
  colorWrong: '#d11616',
  submitHandler: function(form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if ((xhr.readyState === 4) && (xhr.status === 200)) {
          console.log('Отправлено');
        }
    }

    xhr.open('POST', 'php/mail.php', true);
    xhr.send(formData);

    form.reset();
  }
});
