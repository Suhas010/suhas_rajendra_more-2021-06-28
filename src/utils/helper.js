export const debounce = function (func, delay) {
  let timer;
  return function (...args) {
    const that = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(that, args);
    }, delay);
  };
};

export const currency = (number) => new Intl.NumberFormat("en-IN", {
  style: 'currency',
  currency: "INR",
  minimumFractionDigits: 2,
}).format(number);