var quantidadeNumeros =
0;
var novoNumero = "S";
var media = 0;
var somaNumeros = 0;
var numero = 0;
while(novoNumero == "S"){
    numero = prompt("Informe um numero","Digite aqui!");
    somaNumeros = parseFloat(somaNumeros) + parseFloat(numero);
    quantidadeNumeros = quantidadeNumeros + 1;
    novoNumero = prompt("Deseja informar mais um numero? \n[S]im\n[N]ao");
    }
    media = somaNumeros / quantidadeNumeros;
console.log("A media dos numeros informados é " + media);