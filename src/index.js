function modulo10(bloco) {
  const codigo = bloco.split('').reverse();
  let somatorio = 0;
  codigo.forEach((v, index) => {
    const soma = Number(v) * (((index + 1) % 2) + 1);
    somatorio += soma > 9 ? (Math.trunc(soma / 10)) + (soma % 10) : soma;
  });
  const restoDivisao = somatorio % 10;
  if (restoDivisao === 0) return 0;
  return 10 - restoDivisao;
}

function modulo11(bloco) {
  const codigo = bloco.split('').reverse();
  let somatorio = 0;
  let multiplicador = 2;
  codigo.forEach((v) => {
    somatorio += Number(v) * multiplicador;
    multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
  });
  const restoDivisao = somatorio % 11;
  if (restoDivisao === 0 || restoDivisao === 1 || restoDivisao === 10) return 1;
  return 11 - restoDivisao;
}

function convertToBoletoCodigoBarras(codigo) {
  const cod = codigo.replace(/( |\.)/g, '');
  let codigoBarras = '';
  codigoBarras += cod.substring(0, 3); // Identificação do banco
  codigoBarras += cod.substring(3, 4); // Código da moeda
  codigoBarras += cod.substring(32, 33); // DV
  codigoBarras += cod.substring(33, 37); // Fator Vencimento
  codigoBarras += cod.substring(37, 47); // Valor nominal
  codigoBarras += cod.substring(4, 9); // Campo Livre Bloco 1
  codigoBarras += cod.substring(10, 20); // Campo Livre Bloco 2
  codigoBarras += cod.substring(21, 31); // Campo Livre Bloco 3
  return codigoBarras;
}

export function boletoCodigoBarras(codigo) {
  const cod = codigo.replace(/( |\.)/g, '');
  if (!/^[0-9]{44}$/.test(cod)) return false;
  const DV = cod[4];
  const bloco = cod.substring(0, 4) + cod.substring(5);
  return modulo11(bloco) === Number(DV);
}

export function boletoLinhaDigitavel(codigo) {
  const cod = codigo.replace(/( |\.)/g, '');
  if (!/^[0-9]{47}$/.test(cod)) return false;
  const blocos = [
    {
      num: cod.substring(0, 9),
      DV: cod.substring(9, 10),
    },
    {
      num: cod.substring(10, 20),
      DV: cod.substring(20, 21),
    },
    {
      num: cod.substring(21, 31),
      DV: cod.substring(31, 32),
    },
  ];
  const validBlocos = blocos.every(e => modulo10(e.num) === Number(e.DV));
  const validDV = boletoCodigoBarras(convertToBoletoCodigoBarras(cod));
  return validBlocos && validDV;
}
