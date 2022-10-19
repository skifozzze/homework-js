const refs = {
  inputEl: document.querySelector('#validation-input'),
};

refs.inputEl.addEventListener('blur', onQuantityVerification);

function onQuantityVerification(event) {
  if (
    event.currentTarget.value.length ===
    Number(refs.inputEl.getAttribute('data-length'))
  ) {
    refs.inputEl.classList.value = 'valid';
  } else {
    refs.inputEl.classList.value = 'invalid';
  }
}
