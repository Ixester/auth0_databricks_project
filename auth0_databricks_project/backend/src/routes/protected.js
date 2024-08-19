const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Você acessou uma rota protegida!' });
});

module.exports = router;
