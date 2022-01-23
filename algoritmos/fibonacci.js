// Crie uma função que sempre recebe um número como argumento, e deve retornar uma array com os N elementos da sequência de Fibonacci.

function fibonacci(n){
  if(n == 1) return 0;  // Return value for n=1
  if(n == 2) return 1;  // Return value for n=2
  
  return fibonacci(n-1) + fibonacci(n-2); 
}  

var n = prompt('Digite um numero');
var series = new Array(n); 
  
for(let i = 1; i <= n; i++) {
    series[i-1] = fibonacci(i); 
}
console.log(series);