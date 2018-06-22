export function clearMask(codigo) {
  return codigo.replace(/( |\.|-)/g, '');
}
