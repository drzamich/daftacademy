'use strict';
import {makeRangeIterator, updateDomPlaceholder, getNextStep} from './clock-helpers.js';

const units = ['second', 'minute', 'hour'];
const minValues = [0, 0, 1];
const maxValues = [59, 59, 12];

const d = new Date();
const curTime = [d.getSeconds(), d.getMinutes(), d.getHours() < 12 ? d.getHours() : d.getHours() - 12];

const iterators = [];
const steps = [];

units.forEach((unit, i) => {
  updateDomPlaceholder(unit, curTime[i]);
  iterators[i] = makeRangeIterator(curTime[i] + 1, maxValues[i] + 1, 1);
  steps[i] = getNextStep(iterators[i]);
});

const updateClock = (unit) => {
  const i = units.indexOf(unit);
  if (steps[i].done) {
    iterators[i] = makeRangeIterator(minValues[i], maxValues[i] + 1, 1);
    steps[i] = getNextStep(iterators[i]);
    if (i != units.length - 1) {
      updateClock(units[i + 1]);
    }
  }
  updateDomPlaceholder(unit, steps[i].value);
  steps[i] = getNextStep(iterators[i]);
};

let tick = setInterval(() => {
  updateClock('second');
}, 1000);

const changeSpeed = () => {
  const newInterval = lengthOfSec.value;
  clearInterval(tick);
  tick = setInterval(() => {
    updateClock('second');
  }, newInterval);
};

const lengthOfSec = document.querySelector('#lengthOfSec');
lengthOfSec.addEventListener('input', changeSpeed);
