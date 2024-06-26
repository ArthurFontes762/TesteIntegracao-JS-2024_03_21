document.write('<script src="alvo.js"></script>');

class IntegrationTest {
  runIntegrationTest() {
    try {
      const input1 = prompt('Digite um número inteiro para a Função 1:');
      const result1 = this.function1(input1);

      const result2 = this.function2(result1.value);

      const input3 = prompt('Digite uma palavra para a Função 3:');
      const result3 = this.function3(result2.value, input3);

      const integrationResult = document.getElementById('integrationResult');
      integrationResult.innerHTML = result1.text + '<br>' + result2.text + '<br>' + result3.text;
    } catch (error) {
      document.getElementById('integrationResult').innerHTML = 'Erro: ' + error.message;
    }
  }

  function1(input) {
    if (!/^\d+$/.test(input)) {
      throw new Error('Função 1: Erro! Entrada inválida. Deve ser um número inteiro.');
    } else {
      const number = parseInt(input);
      const result = number * 2;
      return { text: `Função 1: Recebido o número inteiro ${input}. O dobro é ${result}.`, value: result };
    }
  }

  function2(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
      throw new Error('Função 2: Erro! Entrada inválida. Deve ser um número decimal.');
    } else {
      const result = Math.sqrt(number);
      return { text: `Função 2: A raiz quadrada de ${input} é ${result}.`, value: result };
    }
  }

  function3(previousResult, input) {
    if (!/^[a-zA-Z]+$/.test(input)) {
      throw new Error('Função 3: Erro! Entrada inválida. Deve ser composta apenas por letras.');
    } else {
      const result = input.toUpperCase();
      return { text: `Função 3: Recebida a palavra "${input}". A palavra em maiúsculas é "${result}". Resultado final:"${result}"_${previousResult}.`, value: previousResult };
    }
  }
}

class AlvoTest {
  runalvoTest() {
    try {
      const input4 = prompt('Digite um número inteiro para a Função 4 Dobro:');
      const result4 = function4Dobro(input4);

      const result5 = function5RaizQuadrada(result4.value);

      const input6 = prompt('Digite uma palavra para a Função 6:');
      const result6 = function6CaixaAlta(input6); // Ajustado para passar apenas um argumento, um dos problemas.

      const alvoResult = document.getElementById('alvoResult');
      alvoResult.innerHTML = result4.text + '<br>' + result5.text + '<br>' + result6.text;
    } catch (error) {
      document.getElementById('alvoResult').innerHTML = 'Erro: ' + error.message;
    }
  }
}

function runIntegrationTest() {
  const integrationTest = new IntegrationTest();
  integrationTest.runIntegrationTest();
}

function runalvoTest() {
  const alvoTest = new AlvoTest();
  alvoTest.runalvoTest();
}



