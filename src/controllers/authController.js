const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const usuario = await Usuario.findOne({ where: { username } });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const passwordValid = await usuario.checkPassword(password);
    if (!passwordValid) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: usuario.id, username: usuario.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor', details: error.message });
  }
};

module.exports = {
  login,
};
