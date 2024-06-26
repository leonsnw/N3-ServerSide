const { Usuario } = require('../models');

const criarUsuario = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se já existe um usuário com o mesmo username
    const usuarioExistente = await Usuario.findOne({ where: { username } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Username já está em uso' });
    }

    // Cria o novo usuário
    const novoUsuario = await Usuario.build({ username });
    await novoUsuario.setPassword(password);
    await novoUsuario.save();

    res.status(201).json({ id: novoUsuario.id, username: novoUsuario.username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  criarUsuario,
};
