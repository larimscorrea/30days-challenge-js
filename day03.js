var valor1;
valor1 = 50;
valor2 = 100;

var valor, 
valor2;

var vendedor, jan, fev, mar,
media;

vendedor = prompt("Informe o nome do vendedor", "Digite aqui");
jan = prompt("Informe o valor dar vendas de janeiro", "Digite aqui");
fev = prompt("Informe o valor dar vendas de fevereiro", "Digite aqui");
mar = prompt("Informe o valor dar vendas de março", "Digite aqui");

media = ( parseFloat(jan) + parseFloat(fev) + parseFloat(mar)
)/3

console.log("A média de vendas do " + vendedor + " no 1º trim foi " + media);
alert("A média de vendas do " + vendedor + " no 1º trim foi " + media);