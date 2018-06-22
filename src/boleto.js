import { boletoArrecadacao } from './boleto-arrecadacao';
import { boletoBancario } from './boleto-bancario';
import { clearMask } from './utils';

export function boleto(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (Number(cod[0]) === 8) return boletoArrecadacao(cod, validarBlocos);
  return boletoBancario(cod, validarBlocos);
}
