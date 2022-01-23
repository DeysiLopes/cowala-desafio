// Crie uma função que sempre recebe um objeto como argumento e retorna-o excluindo as propriedades sem valor.
let obj = {
    teste: null,
    teste2: 3,
    teste3: "teste"
}
Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);

console.log(obj)