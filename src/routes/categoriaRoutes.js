const express = require('express');
const {
  criarCategoria,
  listarCategorias,
  obterCategoria,
  atualizarCategoria,
  deletarCategoria,
} = require('../controllers/categoriaController');

const router = express.Router();

router.post('/', criarCategoria);
router.get('/', listarCategorias);
router.get('/:id', obterCategoria);
router.put('/:id', atualizarCategoria);
router.delete('/:id', deletarCategoria);

module.exports = router;
