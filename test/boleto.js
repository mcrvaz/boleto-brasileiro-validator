const { assert } = require('../node_modules/chai/chai');
const { boleto } = require('../src/boleto');

describe('Validar Boletos', () => {
  it('validar linha digitável do boleto', () => {
    const result = boleto('23793.38128 60007.827136 95000.063305 9 75520000370000');
    assert.equal(result, true);
  });

  it('validar blocos da linha digitável do boleto', () => {
    const result = boleto('23793.38128 60007.827136 95000.063305 9 75520000370000', true);
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
