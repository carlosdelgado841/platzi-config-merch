// eslint-disable-next-line import/prefer-default-export
export function handleSumTotal(cart) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
}
