import { json } from 'express';

import CPF from "../utils/index.js";

export default (app) => {
  app.use(
    json()
  );

  app.get('/', (req, res) => res.status(200).json({ message: 'CPF API', code: 200 }));

  app.get('/v1/generate', (req, res) => {
    const cpf = CPF.generate();

    if (!cpf)
      return res.status(400).json({ message: 'Ocorreu um erro ao gerar CPF', code: 400 });

    return res.status(200).json({ cpf, code: 200 });
  });

  app.get('/v1/validate/:cpf', (req, res) => {
    let { cpf } = req.params;

    cpf = cpf.replace(/[.-]/g, '');

    const isValid = CPF.validateDigits(cpf);

    if (!isValid)
      return res.status(400).json({ message: 'CPF é inválido', code: 400 });

    const infos = CPF.searchUF(cpf);

    if (!infos)
      return res.status(400).json({ message: 'CPF é inválido', code: 400 });

    return res.status(200).json({ message: 'CPF é válido.', infos, code: 200 });
  });
}