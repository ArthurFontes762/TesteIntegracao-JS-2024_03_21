// FUNÇÃO 4
const function4Dobro = (input) => {
    if (!/^\d+$/.test(input)) {
        throw new Error('Função 4: Erro! Entrada inválida. Deve ser um número inteiro.');
    } else {
        const number = parseInt(input);
        const result = number * 2;
        return { text: `Função 4: Recebido o número inteiro ${input}. O dobro é ${result}.`, value: result };
    }
}

// FUNÇÃO 5
const function5RaizQuadrada = (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error('Função 5: Erro! Entrada inválida. Deve ser um número decimal.');
    } else {
        const result = Math.sqrt(number);
        return { text: `Função 5: A raiz quadrada de ${input} é ${result}.`, value: result };
    }
}

// FUNÇÃO 6 (PRECISO CORRIGIR ESTA FUNÇÃO POIS NÃO ESTÁ FUNCIONANDO COMO DEVIA)
const function6CaixaAlta = (input) => {
    if (!/^[a-zA-Z]+$/.test(input)) {
        throw new Error('Função 6: Erro! Entrada inválida. Deve ser composta apenas por letras.');
    } else {
        const result = input.toUpperCase();
        return { text: `Função 6: Recebida a palavra "${input}". A palavra em maiúsculas é "${result}". Resultado final:"${result}"_${previousResult}.`, value: previousResult };
    }
}
