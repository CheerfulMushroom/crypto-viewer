export const prettifyPrice = (
  price: number,
  showSign: boolean = false
): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const priceString = formatter.format(price).slice(1);
  if (!showSign) {
    return priceString;
  }

  return `${sign(price)}${priceString}`;
};

export const sign = (value: number) => {
  return value < 0 ? '-' : '+';
};
