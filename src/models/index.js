const Prestador = require('./Prestador');
const Categoria = require('./Categoria');
const Servico = require('./Servico');

Prestador.hasMany(Servico, { foreignKey: 'prestador_id' });
Categoria.hasMany(Servico, { foreignKey: 'categoria_id' });
Servico.belongsTo(Prestador, { foreignKey: 'prestador_id' });
Servico.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = { Prestador, Categoria, Servico };
