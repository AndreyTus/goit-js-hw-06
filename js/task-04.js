const spanCounter = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecremet = document.querySelector('button[data-action="decrement"]')

let counterValue = 0;

btnDecremet.addEventListener('click', () => {
    counterValue -= 1
    spanCounter.textContent = counterValue
});

btnIncrement.addEventListener('click', () => {
    counterValue += 1
    spanCounter.textContent = counterValue
});
