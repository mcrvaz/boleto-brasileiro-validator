const { assert } = require('../node_modules/chai/chai');
const {
  boletoArrecadacao,
  boletoArrecadacaoCodigoBarras,
  boletoArrecadacaoLinhaDigitavel,
} = require('../src/boleto-arrecadacao');

describe('Validar Boletos de Arrecadação', () => {
  it('validação da linha digitável do boleto de arrecadação válido módulo 10 com máscara', () => {
    const result = boletoArrecadacaoLinhaDigitavel('836200000005 667800481000 180975657313 001589636081');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação válido módulo 10 sem máscara', () => {
    const result = boletoArrecadacaoLinhaDigitavel('836200000005667800481000180975657313001589636081');
    assert.equal(result, true);
  });

  it('validação da linha digitável do boleto de arrecadação com blocos módulo 10 válidos', () => {
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

  it('validação da linha digitável do boleto de arrecadação com moeda inválida', () => {
    const result = boletoArrecadacaoLinhaDigitavel('842900000002404201622015806051904292586034111220', true);
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

  it('validação do boleto de arrecadação', () => {
    const result = boletoArrecadacao('836200000005667800481000180975657313001589636081');
    assert.equal(result, true);
  });

  it('validação do boleto de arrecadação com blocos válidos', () => {
    const result = boletoArrecadacao('836200000005667800481000180975657313001589636081', true);
    assert.equal(result, true);
  });

  it('validação do boleto de arrecadação inválido', () => {
    const result = boletoArrecadacao('836200000007800481000180975657313001589636081');
    assert.equal(result, false);
  });

  it('validação do boleto de arrecadação com modulo11 específico', () => {
    const result = boletoArrecadacao('858000000070438403281922630720192528304729600523');
    assert.equal(result, true);
  });
});
