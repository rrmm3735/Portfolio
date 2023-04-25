// функция для анимации чисел
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// выбираем все элементы с классом "stats-number"
const statsNumbers = document.querySelectorAll('.stats-number');

// запускаем анимацию для каждого числа
statsNumbers.forEach((number) => {
  animateValue(number, 0, parseInt(number.innerHTML), 1000);
});
