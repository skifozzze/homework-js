const refs = {
  inputEl: document.querySelector('#name-input'),
  nameEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputName);

function onInputName(event) {
  refs.nameEl.textContent = event.currentTarget.value;

  if ((event.currentTarget.value.length = 0)) {
    refs.nameEl.textContent = 'незнакомец';
  }
}
