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
  console.log('start');
  timerId = setInterval(() => {
    refs.container.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 500);
  refs.startButton.removeEventListener('click', startChanger);
};

const stopChanger = () => {
  console.log('stop');
  refs.startButton.addEventListener('click', startChanger);
  clearInterval(timerId);
};

refs.startButton.addEventListener('click', startChanger);
refs.stopButton.addEventListener('click', stopChanger);
