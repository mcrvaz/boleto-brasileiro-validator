import { boletoArrecadacaoCodigoBarras, boletoArrecadacaoLinhaDigitavel } from './boleto-arrecadacao';
import { boletoCodigoBarras, boletoLinhaDigitavel } from './boleto-bancario';
import { clearMask } from './utils';

export function boleto(codigo, validarBlocos = false) { // eslint-disable-line
  const cod = clearMask(codigo);
  if (cod.length === 44) {
    if (Number(cod[0]) === 8) return boletoArrecadacaoCodigoBarras(cod);
    return boletoCodigoBarras(cod);
  }
  if (cod.length === 48) return boletoArrecadacaoLinhaDigitavel(cod, validarBlocos);
  if (cod.length === 47) return boletoLinhaDigitavel(cod, validarBlocos);
  return false;
}
