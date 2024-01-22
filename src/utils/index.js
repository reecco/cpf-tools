const randomSequence = () => String(Math.floor(Math.random() * (9 - 0 + 1)) + 0);

const invalidCpfs = [
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

const uf_list = [
  { 'name': 'Rio Grande do Sul', 'uf': 'RS', 'digit': 0 },
  { 'name': 'Distrito Federal', 'uf': 'DF', 'digit': 1 },
  { 'name': 'Goiás', 'uf': 'GO', 'digit': 1 },
  { 'name': 'Mato Grosso do Sul', 'uf': 'MS', 'digit': 1 },
  { 'name': 'Mato Grosso', 'uf': 'MT', 'digit': 1 },
  { 'name': 'Tocantins', 'uf': 'TO', 'digit': 1 },
  { 'name': 'Pará', 'uf': 'PA', 'digit': 2 },
  { 'name': 'Amazonas', 'uf': 'AM', 'digit': 2 },
  { 'name': 'Acre', 'uf': 'AC', 'digit': 2 },
  { 'name': 'Amapá', 'uf': 'AP', 'digit': 2 },
  { 'name': 'Rondônia', 'uf': 'RO', 'digit': 2 },
  { 'name': 'Roraima', 'uf': 'RR', 'digit': 2 },
  { 'name': 'Ceará', 'uf': 'CE', 'digit': 3 },
  { 'name': 'Maranhão', 'uf': 'MA', 'digit': 3 },
  { 'name': 'Piauí', 'uf': 'PI', 'digit': 3 },
  { 'name': 'Pernambuco', 'uf': 'PE', 'digit': 4 },
  { 'name': 'Rio Grande do Norte', 'uf': 'RN', 'digit': 4 },
  { 'name': 'Paraíba', 'uf': 'PB', 'digit': 4 },
  { 'name': 'Alagoas', 'uf': 'AL', 'digit': 4 },
  { 'name': 'Bahia', 'uf': 'BA', 'digit': 5 },
  { 'name': 'Sergipe', 'uf': 'SE', 'digit': 5 },
  { 'name': 'Minas Gerais', 'uf': 'MG', 'digit': 6 },
  { 'name': 'Rio de Janeiro', 'uf': 'RJ', 'digit': 7 },
  { 'name': 'Espirito Santo', 'uf': 'ES', 'digit': 7 },
  { 'name': 'São Paulo', 'uf': 'SP', 'digit': 8 },
  { 'name': 'Paraná', 'uf': 'PR', 'digit': 9 },
  { 'name': 'Santa Catarina', 'uf': 'SC', 'digit': 9 },
];

module.exports = { randomSequence, invalidCpfs, uf_list }