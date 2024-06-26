const { Prestador } = require('../models');
const { calcularValorServico } = require('../utils/calculos');

const criarPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.create(req.body);
    res.status(201).json(prestador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarPrestadores = async (req, res) => {
  try {
    const prestadores = await Prestador.findAll();
    res.status(200).json(prestadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.findByPk(req.params.id);
    if (prestador) {
      res.status(200).json(prestador);
    } else {
      res.status(404).json({ error: 'Prestador não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const atualizarPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.findByPk(req.params.id);
    if (prestador) {
      await prestador.update(req.body);
      res.status(200).json(prestador);
    } else {
      res.status(404).json({ error: 'Prestador não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletarPrestador = async (req, res) => {
  try {
    const prestador = await Prestador.findByPk(req.params.id);
    if (prestador) {
      await prestador.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Prestador não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarPrestador,
  listarPrestadores,
  obterPrestador,
  atualizarPrestador,
  deletarPrestador,
};
