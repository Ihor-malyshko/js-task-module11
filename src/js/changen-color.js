const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  container: document.querySelector('.container'),
  startButton: document.querySelector('[start]'),
  stopButton: document.querySelector('[stop]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const startChanger = () => {
  timerId = setInterval(changeColor, 500);
  refs.startButton.classList.add('is-disabled');
  refs.startButton.removeEventListener('click', startChanger);
};

const stopChanger = () => {
  refs.startButton.classList.remove('is-disabled');
  refs.startButton.addEventListener('click', startChanger);
  clearInterval(timerId);
};

refs.startButton.addEventListener('click', startChanger);
refs.stopButton.addEventListener('click', stopChanger);

function changeColor() {
  let oldcolor = refs.container.style.backgroundColor;
  refs.container.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
  while (oldcolor === refs.container.style.backgroundColor) {
    refs.container.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }
}
