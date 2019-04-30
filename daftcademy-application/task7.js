const giveMeMore = (() => {
  let count = 0;
  return () => {
    return count++;
  };
})();
