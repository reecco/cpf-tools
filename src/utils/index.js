import { invalidCpfs, uf_list } from './lists.js';

class CPF {
  static generate() {
    let cpf = 0;
    while (!cpf) {
      const sequence = Digits.generateSequence();

      if (this.validateDigits(sequence)) {
        cpf = sequence;
        return (
          cpf.slice(0, 3) + '.' +
          cpf.slice(3, 6) + '.' +
          cpf.slice(6, 9) + '-' +
          cpf.slice(9, 11)
        );
      }
    }
  }

  static validateDigits(n) {
    if (n.length < 11 || n.length > 11)
      return false;

    const result = invalidCpfs.find(cpf => {
      if (n === cpf) {
        return cpf;
      }
    });

    if (result)
      return false;

    if (n.charAt(9) != Digits.firstDigit(n) || n.charAt(10) != Digits.secondDigit(n))
      return false;

    return true;
  }

  static searchUF(cpf) {
    const digit = cpf.charAt(8);

    const index = Object.keys(uf_list).filter(index => uf_list[index].digit == digit ? uf_list[index] : false);

    if (!index)
      return;

    return uf_list[index];
  }
}

class Digits {
  static generateSequence() {
    let sequence = '';

    while (sequence.length < 11) {
      sequence += String(Math.floor(Math.random() * (9 - 0 + 1)) + 0);
    }

    return sequence;
  }

  static firstDigit(cpf) {
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

  static secondDigit(cpf) {
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
}

export default CPF;