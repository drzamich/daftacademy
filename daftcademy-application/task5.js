const foo = () => {
  document.querySelectorAll("input[type='checkbox']:checked").forEach(e => {
    e.classList.add("on");
  });
};
