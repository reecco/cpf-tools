import { Router } from "express";

import { CNPJ } from "../utils/index.js";

const router = Router();

router.get('/v1/cnpj/generate', (req, res) => {
  const cnpj = CNPJ.generate();

  if (!cnpj)
    return res.status(500).json({ message: 'Ocorreu um erro ao gerar CNPJ.', code: 500 });

  res.status(201).json({ cnpj, code: 201 });
});

router.get('/v1/cnpj/validate/:cnpj', (req, res) => {
  let { cnpj } = req.params;

  cnpj = cnpj.replace(/[//.-]/g);

  const isValid = CNPJ.isValidDigits(cnpj);

  if (!isValid)
    return res.status(400).json({ message: 'CNPJ é inválido.', code: 400 });

  res.status(201).json({ message: 'CNPJ é válido.', code: 201 });
});

export default router;