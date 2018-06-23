const { assert } = require('../node_modules/chai/chai');
const { clearMask } = require('../src/utils');

describe('Limpar Máscara', () => {
  it('remove pontos', () => {
    const result = clearMask('..');
    assert.equal(result, '');
  });
  it('remove hífens', () => {
    const result = clearMask('--');
    assert.equal(result, '');
  });
  it('remove espaços', () => {
    const result = clearMask('  ');
    assert.equal(result, '');
  });
});
