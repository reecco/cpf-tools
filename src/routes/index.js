import { json } from 'express';

import cpfRoutes from './cpf.routes.js';
import cnpjRoutes from './cnpj.routes.js';

export default (app) => {
  app.route('/').get((req, res) => res.status(200).json({ message: 'CPF API', code: 200 }));

  app.use(
    json(),
    cpfRoutes,
    cnpjRoutes
  );
}