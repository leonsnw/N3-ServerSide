const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const prestadorRoutes = require('./routes/prestadorRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(bodyParser.json());

app.use('/prestadores', authMiddleware, prestadorRoutes);
app.use('/categorias', authMiddleware, categoriaRoutes);
app.use('/servicos', authMiddleware, servicoRoutes);
app.use('/auth', authRoutes);
app.use(usuarioRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
