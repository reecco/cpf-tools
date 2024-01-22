const { Router } = require('express');
const { generate, isValid, generateByUF } = require('../validators/CPF');
const { uf_list } = require('../utils/index');

const router = Router();

router.get('/cpf/generate', (req, res) => {
  const cpf = generate();

  if (!cpf)
    return res.status(500).json({ message: 'Ocorreu um erro ao gerar CPF.' });

  res.status(200).json({
    cpf: {
      formatted: cpf,
      unformatted: cpf.replace(/[.-]/g, '')
    }
  });
});

router.get('/cpf/validate/:cpf', (req, res) => {
  let { cpf } = req.params;

  if (!cpf)
    return res.status(400).json({ message: 'Forneça um CPF válido.' });

  const formattedCpf = cpf.replace(/[.-]/g, '');

  if (!isValid(formattedCpf))
    return res.status(422).json({ message: 'CPF é inválido.' });

  res.status(200).json({ message: 'CPF é válido.' });
});

router.get('/cpf/generate/:uf', (req, res) => {
  const { uf } = req.params;

  const isValidUf = uf_list.find(item => item.uf === uf.toUpperCase() && item);

  if (!isValidUf)
    return res.status(404).json({ message: 'UF não encontrado.' });

  const cpf = generateByUF(uf.toUpperCase());

  if (!cpf)
    return res.status(500).json({ message: 'Ocorre um erro ao gerar CPF.' });

  res.status(200).json({
    cpf: {
      formatted: cpf,
      unformatted: cpf.replace(/[.-]/g, '')
    }
  });
});

module.exports = router;