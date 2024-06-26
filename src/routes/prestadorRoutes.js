const express = require('express');
const {
  criarPrestador,
  listarPrestadores,
  obterPrestador,
  atualizarPrestador,
  deletarPrestador,
} = require('../controllers/prestadorController');

const router = express.Router();

router.post('/', criarPrestador);
router.get('/', listarPrestadores);
router.get('/:id', obterPrestador);
router.put('/:id', atualizarPrestador);
router.delete('/:id', deletarPrestador);

module.exports = router;
