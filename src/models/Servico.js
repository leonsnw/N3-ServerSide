const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Prestador = require('./Prestador');
const Categoria = require('./Categoria');

class Servico extends Model {}

Servico.init({
  id_servico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vlr_servico: {
    type: DataTypes.FLOAT,
    defaultValue: 50.00,
    allowNull: false,
  },
  prestador_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Prestador,
      key: 'codigo_prestador',
    },
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'id_categoria',
    },
  },
}, {
  sequelize,
  modelName: 'Servico',
  tableName: 'servicos',
});

module.exports = Servico;
