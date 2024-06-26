const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

class Usuario extends Model {
  async setPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    this.password = hashedPassword;
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
  }
);

module.exports = Usuario;
