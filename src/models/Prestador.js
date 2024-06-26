const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Prestador extends Model {}

Prestador.init({
  codigo_prestador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_prestador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tempo_experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Prestador',
  tableName: 'prestadores',
});

module.exports = Prestador;
