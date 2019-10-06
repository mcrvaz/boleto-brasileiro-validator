import { modulo10, modulo11Bancario } from './modulo';
import { convertToBoletoBancarioCodigoBarras } from './conversor';
import { clearMask } from './utils';

export function boletoBancarioCodigoBarras(codigo) {
  const cod = clearMask(codigo);
  if (!/^[0-9]{44}$/.test(cod)) return false;
  const DV = cod[4];
  const bloco = cod.substring(0, 4) + cod.substring(5);
  return modulo11Bancario(bloco) === Number(DV);
}

export function boletoBancarioLinhaDigitavel(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
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
  const validBlocos = validarBlocos ? blocos.every(e => modulo10(e.num) === Number(e.DV)) : true;
  const validDV = boletoBancarioCodigoBarras(convertToBoletoBancarioCodigoBarras(cod));
  return validBlocos && validDV;
}

export function boletoBancario(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (cod.length === 44) return boletoBancarioCodigoBarras(cod);
  if (cod.length === 47) return boletoBancarioLinhaDigitavel(codigo, validarBlocos);
  return false;
}
