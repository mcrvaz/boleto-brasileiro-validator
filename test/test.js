import { assert } from '../node_modules/chai/chai';
import {
  boleto,
  boletoLinhaDigitavel,
  boletoCodigoBarras,
  boletoArrecadacaoCodigoBarras,
  boletoArrecadacaoLinhaDigitavel,
} from '../src/index';

describe('Boleto', () => {
  it('validação da linha digitável do boleto válido com máscara', () => {
    const result = boletoLinhaDigitavel('23793.38128 60007.827136 95000.063305 9 75520000370000');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto válido sem máscara', () => {
    const result = boletoLinhaDigitavel('23793381286000782713695000063305975520000370000');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto com blocos válidos', () => {
    const result = boletoLinhaDigitavel('23793381286000782713695000063305975520000370000', true);
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto inválido', () => {
    const result = boletoLinhaDigitavel('23793.38128 60007.827136 95000.063305 4 75520000370000');
    assert.equal(result, false);
  });

  it('validação da linha digitável do boleto com tamanho inválido', () => {
    const result = boletoLinhaDigitavel('23793.38128 6007.827136 95000.063305 4 75520000370000');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto válido', () => {
    const result = boletoCodigoBarras('00193373700000001000500940144816060680935031');
    assert.equal(result, true);
  });

  it('validação do código de barras do boleto inválido', () => {
    const result = boletoCodigoBarras('00153373700000001000500940144816060680935031');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto com tamanho inválido', () => {
    const result = boletoCodigoBarras('0015337300000001000500940144816060680935031');
    assert.equal(result, false);
  });

  it('validação da linha digitável do boleto de arrecadação válido módulo 10 com máscara', () => {
    const result = boletoArrecadacaoLinhaDigitavel('836200000005 667800481000 180975657313 001589636081');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação válido módulo 10 sem máscara', () => {
    const result = boletoArrecadacaoLinhaDigitavel('836200000005667800481000180975657313001589636081');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação com blocos válidos', () => {
    const result = boletoArrecadacaoLinhaDigitavel('836200000005667800481000180975657313001589636081', true);
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação inválido módulo 10', () => {
    const result = boletoArrecadacaoLinhaDigitavel('836200000005667800481800180975657313001589636081');
    assert.equal(result, false);
  });

  it('validação da linha digitável do boleto de arrecadação válido módulo 11 com máscara', () => {
    const result = boletoArrecadacaoLinhaDigitavel('85890000460-9 52460179160-5 60759305086-5 83148300001-0');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação válido módulo 11 sem máscara', () => {
    const result = boletoArrecadacaoLinhaDigitavel('848900000002404201622015806051904292586034111220');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação inválido módulo 11', () => {
    const result = boletoArrecadacaoLinhaDigitavel('848900000002404201622015809051904292586034111220');
    assert.equal(result, false);
  });

  it('validação da linha digitável do boleto de arrecadação com identificação inválida', () => {
    const result = boletoArrecadacaoLinhaDigitavel('536400000011331201380002812884627116080136181551');
    assert.equal(result, false);
  });

  it('validação da linha digitável do boleto de arrecadação com tamanho inválido', () => {
    const result = boletoArrecadacaoLinhaDigitavel('53640000001133120180002812884627116080136181551');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto de arrecadação válido módulo 10', () => {
    const result = boletoArrecadacaoCodigoBarras('83620000000667800481001809756573100158963608');
    assert.equal(result, true);
  });

  it('validação do código de barras do boleto de arrecadação válido módulo 11', () => {
    const result = boletoArrecadacaoCodigoBarras('84890000000404201622018060519042958603411122');
    assert.equal(result, true);
  });

  it('validação do código de barras do boleto de arrecadação inválido', () => {
    const result = boletoArrecadacaoCodigoBarras('83620000000667800481001809756573800158963608');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto de arrecadação com identificação inválida', () => {
    const result = boletoArrecadacaoCodigoBarras('54640000000873500240300150349033470804040612');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto de arrecadação com moeda inválida', () => {
    const result = boletoArrecadacaoCodigoBarras('84240000000873500240300150349033470804040612');
    assert.equal(result, false);
  });

  it('validação do código de barras do boleto de arrecadação com tamanho inválido', () => {
    const result = boletoArrecadacaoCodigoBarras('8464000000087350024030015034903370804040612');
    assert.equal(result, false);
  });

  it('validar linha digitável do boleto', () => {
    const result = boleto('23793.38128 60007.827136 95000.063305 9 75520000370000');
    assert.equal(result, true);
  });

  it('validar código de barras do boleto', () => {
    const result = boleto('00193373700000001000500940144816060680935031');
    assert.equal(result, true);
  });

  it('validar linha digitável do boleto de arrecadação', () => {
    const result = boleto('85890000460-9 52460179160-5 60759305086-5 83148300001-0');
    assert.equal(result, true);
  });

  it('validar código de barras do boleto de arrecadação', () => {
    const result = boleto('83620000000667800481001809756573100158963608');
    assert.equal(result, true);
  });

  it('formato de boleto não identificado', () => {
    const result = boleto('836200000000481001809756573100158963608');
    assert.equal(result, false);
  });
});
