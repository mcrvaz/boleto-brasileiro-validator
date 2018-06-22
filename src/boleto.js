import { boletoArrecadacao } from './boleto-arrecadacao';
import { boletoBancario } from './boleto-bancario';
import { clearMask } from './utils';

export function boleto(codigo, validarBlocos = false) { // eslint-disable-line
  const cod = clearMask(codigo);
  if (Number(cod[0]) === 8) return boletoArrecadacao(cod);
  return boletoBancario(cod);
}
