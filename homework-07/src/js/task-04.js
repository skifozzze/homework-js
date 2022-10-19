const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const counterValue = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

decrementBtnEl.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtnEl.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
