// parâmetros de função

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(1, 2))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(21, "juliana"))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(1, 2)))

