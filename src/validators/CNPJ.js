const { randomSequence } = require('../utils/index');

const calcMod = (acc, number, index) => acc + (index + 2) * number;

const genCnpj = cnpj => cnpj.length === 14 ? cnpj : genCnpj(cnpj += randomSequence());

const cnpjMask = cnpj => {
  const regex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
  return cnpj.replace(regex, '$1.$2.$3/$4-$5');
}

function generate() {
  const cnpj = genCnpj('');
  return isValid(cnpj) ? cnpjMask(cnpj) : generate();
}

function isValid(cnpj) {
  const getFirstDigit = cnpj => {
    const firstSum = [...cnpj]
      .slice(0, 4)
      .reverse()
      .reduce(calcMod, 0);

    const secondSum = [...cnpj]
      .slice(4)
      .reverse()
      .slice(2)
      .reduce(calcMod, 0);

    const mod = parseInt((firstSum + secondSum) % 11);

    return mod < 2 ? 0 : 11 - mod;
  }

  const getSecondDigit = (cnpj) => {
    const firstSum = [...cnpj]
      .slice(0, 5)
      .reverse()
      .reduce(calcMod, 0);

    const secondSum = [...cnpj]
      .slice(5)
      .reverse()
      .slice(1)
      .reduce(calcMod, 0);

    const mod = parseInt((firstSum + secondSum) % 11);

    return mod < 2 ? 0 : 11 - mod;
  }

  const firstDigit = getFirstDigit(cnpj).toString();

  const secondDigit = getSecondDigit(cnpj, firstDigit).toString();

  return firstDigit + secondDigit === cnpj.slice(12);
}

module.exports = { isValid, generate, cnpjMask }