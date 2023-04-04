class CNPJ {
  static generate() {
    while (true) {
      const cnpj = generateSequence('');
      if (this.isValidDigits(cnpj))
        return this.formatter(cnpj);
    }
  }

  static isValidDigits(cnpj) {
    if (cnpj.length != 14)
      return false;
  
    const digit1 = firstDigit(cnpj);
    const digit2 = secondDigit(cnpj, digit1);
  
    if (cnpj.slice(8, 12) !== '0001')
      return false;
  
    return cnpj.slice(12, 14) == `${digit1}${digit2}`;
  }

  static formatter(cnpj) {
    return (
      cnpj.slice(0, 2) + '.' +
      cnpj.slice(2, 5) + '.' +
      cnpj.slice(5, 8) + '/' +
      cnpj.slice(8, 12) + '-' +
      cnpj.slice(12, 14)
    );
  }
}

function firstDigit(cnpj) {
  let aux = 0;
  let sum = 0;

  for (let i = 5; i >= 2; --i) {
    let number = cnpj.charAt(aux);
    sum += number * i;
    aux++;
  }

  for (let i = 9; i >= 2; --i) {
    let number = cnpj.charAt(aux);
    sum += number * i;
    aux++;
  }

  let mod = sum % 11;

  if (mod < 2)
    return 0;

  return 11 - mod;
}

function secondDigit(cnpj, digit1) {
  let aux = 0;
  let sum = 0;

  for (let i = 6; i >= 2; --i) {
    let number = cnpj.charAt(aux);
    sum += number * i;
    aux++;
  }

  for (let i = 9; i >= 2; --i) {
    let number = cnpj.charAt(aux);
    if (i == 2) {
      sum += digit1 * i;
      break;
    }
    sum += number * i;
    aux++;
  }

  let mod = sum % 11;

  if (mod < 2)
    return 0;

  return 11 - mod;
}

function generateSequence(sequence) {
  if (sequence.length == 14)
    return sequence;

  return generateSequence(sequence += String(Math.floor(Math.random() * (9 - 0 + 1)) + 0));
}

export default CNPJ;