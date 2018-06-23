const { assert } = require('../node_modules/chai/chai');
const { boletoBancario, boletoBancarioCodigoBarras, boletoBancarioLinhaDigitavel } = require('../src/boleto-bancario');

describe('Validar Boletos Bancários', () => {
  it('validação da linha digitável do boleto válido com máscara', () => {
    const result = boletoBancarioLinhaDigitavel('23793.38128 60007.827136 95000.063305 9 75520000370000');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto válido sem máscara', () => {
    const result = boletoBancarioLinhaDigitavel('23793381286000782713695000063305975520000370000');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto com blocos válidos', () => {
    const result = boletoBancarioLinhaDigitavel('23793381286000782713695000063305975520000370000', true);
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto inválido', () => {
    const result = boletoBancarioLinhaDigitavel('23793.38128 60007.827136 95000.063305 4 75520000370000');
    assert.equal(result, false);
  });

  it('validação da linha digitável do boleto com tamanho inválido', () => {
    const result = boletoBancarioLinhaDigitavel('23793.38128 6007.827136 95000.063305 4 75520000370000');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto válido', () => {
    const result = boletoBancarioCodigoBarras('00193373700000001000500940144816060680935031');
    assert.equal(result, true);
  });

  it('validação do código de barras do boleto inválido', () => {
    const result = boletoBancarioCodigoBarras('00153373700000001000500940144816060680935031');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto com tamanho inválido', () => {
    const result = boletoBancarioCodigoBarras('0015337300000001000500940144816060680935031');
    assert.equal(result, false);
  });

  it('validação do boleto', () => {
    const result = boletoBancario('23793381286000782713695000063305975520000370000');
    assert.equal(result, true);
  });

  it('validação do boleto com blocos válidos', () => {
    const result = boletoBancario('23793381286000782713695000063305975520000370000', true);
    assert.equal(result, true);
  });

  it('validação do boleto inválido', () => {
    const result = boletoBancario('2379338128600078271369500006975520000370000');
    assert.equal(result, false);
  });
});
