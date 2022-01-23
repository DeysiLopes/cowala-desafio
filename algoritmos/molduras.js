// Crie uma função que recebe dois números maiores que zero e exibe na tela (console) uma moldura com essas dimensões.


function pulaLinha (){
   console.log("\n")
}
var aux = "";
for (var linha = 1; linha <= 2; linha++){
    for  (var coluna = 1; coluna <= 2; coluna++  ){
        aux += "*"
        console.log(aux)
        //pulaLinha ();
    } 
    //console.log(aux);
    //aux = "/ ";
}

// var n = 2;
// var aux = "";
// for (var linha = 1; linha <= n; linha++) {
//   for (var coluna = 1; coluna <= n; coluna++) {
//     aux += "*";
//     console.log(aux);
//   }
//   console.log(aux);
//   //aux = "";
// }