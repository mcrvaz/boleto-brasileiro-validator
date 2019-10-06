/*
  A representação numérica do código de barras é composta, por cinco campos, sendo os
  três primeiros amarrados por DVs e calculados pelo módulo 10, conforme segue:
    a) O módulo 10 deverá ser utilizado para calcular o DV dos 03 (três) primeiros campos
    da linha digitável;
    b) Os multiplicadores começam com o número 2 (dois), sempre pela direita, alternandose
    1 e 2;
    c) Multiplicar cada algarismo que compõe o número pelo seu respectivo peso
    (multiplicador):
    d) Caso o resultado da multiplicação seja maior que 9 (nove) deverão ser somados os
    algarismos do produto, até reduzi-lo a um único algarismo:
    a. Exemplo: Resultado igual a 18, então 1+8 = 9
    e) Subtrair o total apurado no item anterior, da dezena imediatamente superior ao total
    apurado:
    a. Exemplo: Resultado da soma igual a 25, então 30 - 25
    f) O resultado obtido será o dígito verificador do número;
    a. Exemplo: 30-25 = 5 então 5 é o Dígito Verificador
    g) Se o resultado da subtração for igual a 10 (dez), o dígito verificador será igual a 0
    (zero)
*/
export function modulo10(bloco) {
  const codigo = bloco.split('').reverse();
  const somatorio = codigo.reduce((acc, current, index) => {
    let soma = Number(current) * (((index + 1) % 2) + 1);
    soma = (soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma);
    return acc + soma;
  }, 0);
  return (Math.ceil(somatorio / 10) * 10) - somatorio;
}

/*
  Por definição do BACEN, na 5ª posição do código de barras, deve ser indicado,
  obrigatoriamente, o “dígito verificador” (DV), do Código de Barras, calculado pelo módulo
  11, conforme segue:
    a) O código de barras possui 44 (quarenta e quatro) posições, incluindo o DV;
    b) Para calcular o DV considerar 43 posições do Código de Barras sendo da posição 1
    a 4 e da posição 6 a 44;
    c) Multiplicar cada algarismo que compõe o número pelo seu respectivo multiplicador
    (peso), iniciando-se pela 44a posição e saltando a 5a posição;
    d) Os multiplicadores (pesos) variam de 2 a 9;
    e) O primeiro dígito da direita para a esquerda deverá ser multiplicado por 2, o segundo
    por 3 e assim sucessivamente;
    f) Os resultados das multiplicações devem ser somados:
    a. Exemplo:(6 X 2) + (3 X 1) + (4 X 8) + ... + (4 X 0) = 712;
    g) O total da soma deverá ser dividido por 11:
    a. Exemplo: 712/11 = 64. Resto igual a 8;
    h) O resto da divisão deverá ser subtraído de 11:
    a. Exemplo: 11 - 8 = 3, Portando “3” é o Dígito verificador
    i) Se o resultado da subtração for:
      I - igual a 0.....................D.V. igual a 1
      II - igual a 10....................D.V. igual a 1
      III - igual a 11....................D.V. igual a 1
      IV - diferente de 10 e 11..........D.V. será o próprio dígito, no caso do exemplo “3”
*/
export function modulo11Bancario(bloco) {
  const codigo = bloco.split('').reverse();
  let multiplicador = 2;
  const somatorio = codigo.reduce((acc, current) => {
    const soma = Number(current) * multiplicador;
    multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
    return acc + soma;
  }, 0);
  const restoDivisao = somatorio % 11;
  const DV = 11 - restoDivisao;
  if (DV === 0 || DV === 10 || DV === 11) return 1;
  return DV;
}

/*
  O DAC (Dígito de Auto-Conferência) módulo 11, de um número é calculado multiplicando
  cada algarismo, pela seqüência de multiplicadores 2,3,4,5,6,7,8,9,2,3,4....
  posicionados da direita para a esquerda.

  A soma dos produtos dessa multiplicação é dividida por 11, obtém-se o resto da divisão, este
  resto deve ser subtraído de 11, o produto da subtração é o DAC.

  Observação: Quando o resto da divisão for igual a 0 ou 1, atribuí-se ao DV o digito “0”,
  e quando for 10, atribuí-se ao DV o digito “1”.
*/
export function modulo11Arrecadacao(bloco) {
  const codigo = bloco.split('').reverse();
  let multiplicador = 2;
  const somatorio = codigo.reduce((acc, current) => {
    const soma = Number(current) * multiplicador;
    multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
    return acc + soma;
  }, 0);
  const restoDivisao = somatorio % 11;

  if (restoDivisao === 0 || restoDivisao === 1) {
    return 0;
  }
  if (restoDivisao === 10) {
    return 1;
  }
  const DV = 11 - restoDivisao;
  return DV;
}
