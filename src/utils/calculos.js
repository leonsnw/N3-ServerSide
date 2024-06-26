const calcularValorServico = (tempoExperiencia) => {
    let valor = 50.00;
    if (tempoExperiencia > 5) {
      valor *= 1.75;
    } else if (tempoExperiencia > 3) {
      valor *= 1.50;
    } else if (tempoExperiencia === 3) {
      valor *= 1.30;
    }
    return valor;
  };
  
  module.exports = { calcularValorServico };
  