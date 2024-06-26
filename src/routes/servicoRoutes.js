const express = require('express');
const {
  criarServico,
  listarServicos,
  obterServico,
  atualizarServico,
  deletarServico,
} = require('../controllers/servicoController');

const router = express.Router();

router.post('/', criarServico);
router.get('/', listarServicos);
router.get('/:id', obterServico);
router.put('/:id', atualizarServico);
router.delete('/:id', deletarServico);

module.exports = router;
