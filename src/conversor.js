import { clearMask } from './utils';

export function convertToBoletoArrecadacaoCodigoBarras(codigo) {
  const cod = clearMask(codigo);
  let codigoBarras = '';
  for (let index = 0; index < 4; index++) {
    const start = (11 * (index)) + index;
    const end = (11 * (index + 1)) + index;
    codigoBarras += cod.substring(start, end);
  }
  return codigoBarras;
}

export function convertToBoletoBancarioCodigoBarras(codigo) {
  const cod = clearMask(codigo);
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
