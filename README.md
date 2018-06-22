# boleto-brasileiro-validator
  Biblioteca para validar boletos.

  Suporta boletos de arrecadação e boletos bancários, tanto a representação do código de barras como a linha digitável.

  **Todas as validações podem ser feitas com ou sem máscara.**

  ## Exemplos de boletos

  ## Arrecadação
  ![Represetação visual do código de barras do boleto de arrecadação](https://i.imgur.com/AQmEn0S.png)
  ### Arrecadação - Código de barras
    85890000460 52460179160 60759305086 83148300001
  ### Arrecadação - Linha digitável
    85890000460-9 52460179160-5 60759305086-5 83148300001-0

  ## Bancário
  ![Represetação visual do código de barras do boleto bancário](https://i.imgur.com/FfCdC1Y.png)
  ### Bancário - Código de barras
    84890000000404201622018060519042958603411122
  ### Bancário - Linha digitável
    23793.38128 60007.827136 95000.063305 9 75520000370000

# Instalação
  ```sh
  npm install boleto-brasileiro-validator --save
  ```

# Como usar
  ### **Para validar qualquer tipo de boleto, com ou sem máscara**
```js
  import { boleto } from 'boleto-brasileiro-validator';

  boleto('23793.38128 60007.827136 95000.063305 9 75520000370000'); // true
  boleto('23793381286000782713695000063305975520000370000'); // true
  boleto('836200000005 667800481000 180975657313 001589636081'); // true
  boleto('536200000005 667800481000 180975657313 001589636081'); // false
  boleto('001933737000000144816060680935031'); // false
```
  ### **Para validar boletos de arrecadação (luz, água, etc.)**

```js
  import {
    boletoArrecadacao, // valida qualquer tipo de boleto de arrecadação
    boletoArrecadacaoCodigoBarras, // valida representação númerica do código de barras
    boletoArrecadacaoLinhaDigitavel, // valida linha digitável do boleto
  } from 'boleto-brasileiro-validator';

  boletoArrecadacao('836200000005 667800481000 180975657313 001589636081'); // true
  boletoArrecadacaoCodigoBarras('84890000000404201622018060519042958603411122'); // true
  boletoArrecadacaoLinhaDigitavel('85890000460-9 52460179160-5 60759305086-5 83148300001-0'); // true
```

  ### **Para validar boletos bancários**
```js
  import {
    boletoBancario, // valida qualquer tipo de boleto bancário
    boletoBancarioCodigoBarras, // valida representação númerica do código de barras
    boletoBancarioLinhaDigitavel, // valida linha digitável do boleto
  } from 'boleto-brasileiro-validator';

  boletoBancario('23793.38128 60007.827136 95000.063305 9 75520000370000'); // true
  boletoBancarioCodigoBarras('00193373700000001000500940144816060680935031'); // true
  boletoBancarioLinhaDigitavel('23793381286000782713695000063305975520000370000'); // true

```
### **Observação**
  **Por padrão, a validação individual de cada bloco não é realizada.**

  Caso esse comportamento seja necessário, as seguintes funções aceitam um parâmetro adicional para habilitar a validação:
```js
  boleto('23793.38128 60007.827136 95000.063305 9 75520000370000', true);
  boletoBancario('23793381286000782713695000063305975520000370000', true);
  boletoBancarioLinhaDigitavel('23793381286000782713695000063305975520000370000', true);
  boletoArrecadacao('836200000005667800481000180975657313001589636081', true);
  boletoArrecadacaoLinhaDigitavel('836200000005667800481000180975657313001589636081', true);
```

# Regras de Validação
  Regras para validação de boletos bancários: [Especificações Técnicas
para Confecção de Boleto de Cobrança
do Banco do Brasil](http://www.bb.com.br/docs/pub/emp/empl/dwn/Doc5175Bloqueto.pdf)

  Regras para validação de boletos de arrecadação: [FEBRABAN - “Layout” Padrão de Arrecadação/Recebimento
com Utilização do Código de Barras](https://cmsportal.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20-%20Vers%C3%A3o%205%20-%2001_08_2016.pdf)

# Licença
  This project is licensed under the MIT License - see the LICENSE.md file for details
