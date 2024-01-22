const { json } = require('express');

const cnpjRoutes = require('./cnpj.routes');
const cpfRoutes = require('./cpf.routes');

module.exports = (app) => {
  app.route('/').get((req, res) => res.status(200).json({ message: 'CPF API', code: 200 }));

  app.use(
    '/api/v2',
    json(),
    cpfRoutes,
    cnpjRoutes
  );
}