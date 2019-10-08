import { modulo10, modulo11Arrecadacao } from './modulo';
import { convertToBoletoArrecadacaoCodigoBarras } from './conversor';
import { clearMask } from './utils';

export function boletoArrecadacaoCodigoBarras(codigo) {
  const cod = clearMask(codigo);
  if (!/^[0-9]{44}$/.test(cod) || Number(cod[0]) !== 8) return false;
  const codigoMoeda = Number(cod[2]);
  const DV = Number(cod[3]);
  const bloco = cod.substring(0, 3) + cod.substring(4);
  let modulo;
  if (codigoMoeda === 6 || codigoMoeda === 7) modulo = modulo10;
  else if (codigoMoeda === 8 || codigoMoeda === 9) modulo = modulo11Arrecadacao;
  else return false;
  return modulo(bloco) === DV;
}

export function boletoArrecadacaoLinhaDigitavel(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (!/^[0-9]{48}$/.test(cod) || Number(cod[0]) !== 8) return false;
  const validDV = boletoArrecadacaoCodigoBarras(convertToBoletoArrecadacaoCodigoBarras(cod));
  if (!validarBlocos) return validDV;
  const codigoMoeda = Number(cod[2]);
  let modulo;
  if (codigoMoeda === 6 || codigoMoeda === 7) modulo = modulo10;
  else if (codigoMoeda === 8 || codigoMoeda === 9) modulo = modulo11Arrecadacao;
  else return false;
  const blocos = Array.from({ length: 4 }, (v, index) => {
    const start = (11 * (index)) + index;
    const end = (11 * (index + 1)) + index;
    return {
      num: cod.substring(start, end),
      DV: cod.substring(end, end + 1),
    };
  });
  const validBlocos = blocos.every(e => modulo(e.num) === Number(e.DV));
  return validBlocos && validDV;
}

export function boletoArrecadacao(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (cod.length === 44) return boletoArrecadacaoCodigoBarras(cod);
  if (cod.length === 48) return boletoArrecadacaoLinhaDigitavel(codigo, validarBlocos);
  return false;
}
