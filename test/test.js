import { assert } from '../node_modules/chai/chai';
import { boletoLinhaDigitavel, boletoCodigoBarras } from '../src/index';

describe('Boleto', () => {

  it('validação de linha digitável do boleto válido com máscara', () => {
    const result = boletoLinhaDigitavel('23793.38128 60007.827136 95000.063305 9 75520000370000');
    assert.strictEqual(result, true);
  });

  it('validação de linha digitável do boleto válido sem máscara', () => {
    const result = boletoLinhaDigitavel('23793381286000782713695000063305975520000370000');
    assert.strictEqual(result, true);
  });

  it('validação de linha digitável do boleto inválido', () => {
    const result = boletoLinhaDigitavel('23793.38128 60007.827136 95000.063305 4 75520000370000');
    assert.strictEqual(result, false);
  });

  it('validação do código de barras do boleto válido', () => {
    const result = boletoCodigoBarras('00193373700000001000500940144816060680935031');
    assert.strictEqual(result, true);
  });

  it('validação do código de barras do boleto inválido', () => {
    const result = boletoCodigoBarras('00153373700000001000500940144816060680935031');
    assert.strictEqual(result, false);
  });

});
