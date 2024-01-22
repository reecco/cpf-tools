const { Router } = require('express');
const { generate, isValid } = require('../validators/CNPJ');

const router = Router();

router.get('/cnpj/generate', (req, res) => {
  const cnpj = generate();

  if (!cnpj)
    return res.status(500).json({ message: 'Ocorreu um erro ao gerar CNPJ.' });

  res.status(200).json({
    cnpj: {
      formatted: cnpj,
      unformatted: cnpj.replace(/[^\d]/g, '')
    }
  });
});

router.get('/cnpj/validate/:cnpj', (req, res) => {
  let { cnpj } = req.params;

  const formattedCnpj = cnpj.replace(/[//.-]/g);

  if (!isValid(formattedCnpj))
    return res.status(422).json({ message: 'CNPJ é inválido.' });

  res.status(200).json({ message: 'CNPJ é válido.' });
});

module.exports = router;