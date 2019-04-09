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

const getNextStep = (iterator) => {
  return Object.assign({}, iterator.next());
};


export {makeRangeIterator, updateDomPlaceholder, getNextStep};
