const num = document.querySelector('.quantity__count-number');
const decriment = document.querySelector('.quantity__count-minus');
const increment = document.querySelector('.quantity__count-plus');

let number = 1;

const countIncrement = () => {
  number++;
  num.placeholder = number;
};
const countDecriment = () => {
  if (number > 1) {
    number--;
    num.placeholder = number;
  }
};

decriment.addEventListener('click', countDecriment);
increment.addEventListener('click', countIncrement);
