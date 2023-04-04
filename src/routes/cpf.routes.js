import { Router } from "express";

import { CPF } from "../utils/index.js";
import { uf_list } from "../utils/lists.js";

const router = Router();

router.get('/v1/cpf/generate', (req, res) => {
  const cpf = CPF.generate();

  if (!cpf)
    return res.status(500).json({ message: 'Ocorreu um erro ao gerar CPF.', code: 500 });

  return res.status(201).json({ cpf, code: 201 });
});

router.get('/v1/cpf/validate/:cpf', (req, res) => {
  let { cpf } = req.params;

  cpf = cpf.replace(/[.-]/g, '');

  const isValid = CPF.isValidDigits(cpf);

  if (!isValid)
    return res.status(400).json({ message: 'CPF é inválido.', code: 400 });

  const infos = CPF.searchUF(cpf);

  if (!infos)
    return res.status(400).json({ message: 'CPF é inválido.', code: 400 });

  return res.status(201).json({ message: 'CPF é válido.', uf_list: infos, code: 201 });
});

router.get('/v2/cpf/generate/:uf', (req, res) => {
  const { uf } = req.params;

  const isValidUf = uf_list.find(item => item.uf === uf && item);

  if (!isValidUf)
    return res.status(404).json({ message: 'UF não encontrado.', code: 404 });

  const cpf = CPF.generateByUF(uf.toUpperCase());

  if (!cpf)
    return res.status(500).json({ message: 'Ocorre um erro ao gerar CPF.', code: 500 });

  return res.status(201).json({ cpf, code: 201 });
});

export default router;