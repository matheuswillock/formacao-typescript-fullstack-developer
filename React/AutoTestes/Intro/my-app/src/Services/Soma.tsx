export const Soma = (num: number): number => {
  return num + 1;
};

export const Multiplica = (numA: number, numB: number): number | string => {
  if (numA === 2 || numB === 3) {
    return numA * numB;
  }

  return "Multiplicador não aceito";
};
