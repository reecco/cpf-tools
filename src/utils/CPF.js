import { invalidCpfs, uf_list } from './lists.js';

class CPF {
  static generate() {
    while (true) {
      const cpf = generateSequence('');

      if (this.isValidDigits(cpf)) {
        return this.formatter(cpf);
      }
    }
  }

  static generateByUF(uf) {
    const ufsearch = uf_list.find(item => item.uf === uf && item);

    if (!ufsearch)
      return;

    while (true) {
      const cpf = generateSequence('');

      if (cpf.charAt(8) == ufsearch.digit && this.isValidDigits(cpf))
        return this.formatter(cpf);
    }
  }

  static isValidDigits(n) {
    if (n.length < 11 || n.length > 11)
      return false;

    const result = invalidCpfs.find(cpf => {
      if (n === cpf)
        return cpf;
    });

    if (result)
      return false;

    if (n.charAt(9) != firstDigit(n) || n.charAt(10) != secondDigit(n))
      return false;

    return true;
  }

  static searchUF(cpf) {
    const digit = cpf.charAt(8);

    const list = Object.keys(uf_list)
      .filter(index => uf_list[index].digit == digit && uf_list[index])
      .map(index => uf_list[index]);

    if (!list.length)
      return;
    
    return list;
  }

  static formatter(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }
}

function generateSequence(sequence) {
  if (sequence.length == 11)
    return sequence;

  return generateSequence(sequence += String(Math.floor(Math.random() * (9 - 0 + 1)) + 0));
}

function firstDigit(cpf) {
  const cpf_sequence = [];

  for (let i = 0; i <= cpf.length - 1; i++) {
    cpf_sequence.push(cpf.charAt(i));
  }

  cpf_sequence.pop(10);
  cpf_sequence.pop(9);

  let sum = 0;
  let aux = 0;

  for (let i = 10; i >= 2; i--) {
    sum += (i * cpf_sequence[aux]);
    aux++;
  }

  let mod = sum % 11;

  if (mod < 2)
    return 0;

  let verifier = 11 - mod

  return verifier;
}

function secondDigit(cpf) {
  const cpf_sequence = [];

  for (let i = 0; i <= cpf.length - 1; i++) {
    cpf_sequence.push(cpf.charAt(i));
  }

  cpf_sequence.pop(10);

  let sum = 0;
  let aux = 0;

  for (let i = 11; i >= 2; i--) {
    sum += (i * cpf_sequence[aux]);
    aux++;
  }

  let mod = sum % 11;

  let verifier = 11 - mod

  return verifier;
}

export default CPF;