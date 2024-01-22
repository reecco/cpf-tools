const { randomSequence } = require('../utils/index');
const { invalidCpfs, uf_list } = require('../utils/index');

const calcMod = (acc, number, index) => (acc + ((index + 2) * number)) % 11;

const genCpf = cpf => cpf.length === 11 ? cpf : genCpf(cpf += randomSequence());

const invalidDefaultCpf = cpf => invalidCpfs.find(invalidCpf => invalidCpf === cpf) ? true : false;

const cpfMask = cpf => {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(regex, '$1.$2.$3-$4');
}

function isValid(cpf) {
  if (cpf.length !== 11) return false;

  if (invalidDefaultCpf(cpf)) return false;

  const firstMod = [...cpf]
    .slice(0, 9)
    .reverse()
    .reduce(calcMod, 0);

  const firstDigit = (firstMod < 2 ? 0 : 11 - firstMod).toString();

  const secondMod = [...cpf]
    .slice(0, 10)
    .reduce(calcMod, 0);

  const secondDigit = (11 - secondMod).toString();

  return firstDigit + secondDigit === cpf.slice(9);
}

function generate() {
  const cpf = genCpf('');

  return isValid(cpf) ? cpfMask(cpf) : generate();
}

function generateByUF(uf) {
  const ufsearch = uf_list.find(item => item.uf === uf && item);

  if (!ufsearch)
    return generateByUF(uf);

  const cpf = genCpf('');

  if (cpf.charAt(8) == ufsearch.digit && isValid(cpf)) {
    return cpfMask(cpf);
  }

  return generateByUF(uf);
}

module.exports = { cpfMask, generate, isValid, generateByUF }