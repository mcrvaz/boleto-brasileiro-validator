export function clearMask(codigo) { // eslint-disable-line
  return codigo.replace(/( |\.|-)/g, '');
}
