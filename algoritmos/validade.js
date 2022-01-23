// Crie uma função que recebe uma data e uma string. Essa string é a validade. Você deve retornar indicando se está expirado ou não.
// Inicializamos o objeto Date() com data e horário atual
const hoje = new Date();
const validade = new Date('2023-04-07 12:30:00');

if (hoje.getTime() === validade.getTime()) {
	console.log('As datas são iguais');
}
else if (hoje.getTime() > validade.getTime()) {
	console.log('O produto não está valido e a validade é ' +validade.toLocaleDateString());
}
else {
	console.log('O produto  esta valido '+hoje.toLocaleDateString() + ' e a validade é ' + validade.toLocaleDateString());
}

