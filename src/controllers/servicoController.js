const { Servico, Prestador, Categoria } = require('../models');
const { calcularValorServico } = require('../utils/calculos');

const criarServico = async (req, res) => {
  try {
    const prestador = await Prestador.findByPk(req.body.prestador_id);
    if (!prestador) {
      return res.status(404).json({ error: 'Prestador não encontrado' });
    }
    req.body.vlr_servico = calcularValorServico(prestador.tempo_experiencia);
    const servico = await Servico.create(req.body);
    res.status(201).json(servico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarServicos = async (req, res) => {
  try {
    const servicos = await Servico.findAll({
      include: [Prestador, Categoria],
    });
    res.status(200).json(servicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterServico = async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id, {
      include: [Prestador, Categoria],
    });
    if (servico) {
      res.status(200).json(servico);
    } else {
      res.status(404).json({ error: 'Serviço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const atualizarServico = async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (servico) {
      const prestador = await Prestador.findByPk(req.body.prestador_id);
      if (!prestador) {
        return res.status(404).json({ error: 'Prestador não encontrado' });
      }
      req.body.vlr_servico = calcularValorServico(prestador.tempo_experiencia);
      await servico.update(req.body);
      res.status(200).json(servico);
    } else {
      res.status(404).json({ error: 'Serviço não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletarServico = async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (servico) {
      await servico.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Serviço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarServico,
  listarServicos,
  obterServico,
  atualizarServico,
  deletarServico,
};
