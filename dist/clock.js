function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const updateDomPlaceholder = (id, value) => {
  document.getElementById(id).innerHTML = value.toString().padStart(2, '0');
};

const date = new Date();
const secondInMiliseconds = 1;

const currentHour = date.getHours();
const currentMinute = date.getMinutes();
const currentSecond = date.getSeconds();

// const currentHour = 11;
// const currentMinute = 59;
// const currentSecond = 58;

updateDomPlaceholder('second', currentSecond);
updateDomPlaceholder('minute', currentMinute);
updateDomPlaceholder('hour', currentHour);

let hourGenerator = makeRangeIterator(currentHour + 1, 13, 1);
let minuteGenerator = makeRangeIterator(currentMinute + 1, 60, 1);
let secondGenerator = makeRangeIterator(currentSecond + 1, 60, 1);

let nextStepSec = secondGenerator.next();
let nextStepMin = minuteGenerator.next();
let nextStepHr = hourGenerator.next();

setInterval(() => {
  updateSecond();
}, secondInMiliseconds);

const updateSecond = () => {
  if (nextStepSec.done) {
    secondGenerator = makeRangeIterator(0, 60, 1);
    nextStepSec = secondGenerator.next();
    updateMinute();
  }
  updateDomPlaceholder('second', nextStepSec.value);
  nextStepSec = secondGenerator.next();
};


const updateMinute = () => {
  if (nextStepMin.done) {
    minuteGenerator = makeRangeIterator(0, 60, 1);
    nextStepMin = minuteGenerator.next();
    updateHour();
  }
  updateDomPlaceholder('minute', nextStepMin.value);
  nextStepMin = minuteGenerator.next();
};


const updateHour = () => {
  if (nextStepHr.done) {
    hourGenerator = makeRangeIterator(1, 13, 1);
    nextStepHr = hourGenerator.next();
  }
  updateDomPlaceholder('hour', nextStepHr.value);
  nextStepHr = hourGenerator.next();
};
