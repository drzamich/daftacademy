export const fib = (num) => {
  const res = [];
  if (isNaN(num)) {
    throw new Error('Parameter `num` must be a number of a number-like string');
  }
  const num1 = Number.parseInt(num);
  if (num1 != num || num1 != parseFloat(num)) {
    throw new Error('Parameter `num` must be an integer');
  }
  if (num1 < 1) {
    throw new Error('Parameter `num` must be greater than 0');
  } else {
    for (let i = 0; i < num; i++) {
      if (i < 2) {
        res.push(i);
      } else {
        const a = Array.from(res);
        const v1 = a.pop();
        const v2 = a.pop();
        res.push(v1 + v2);
      }
    }
    return res;
  }
};
