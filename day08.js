var numero1 = prompt("Informe o primeiro número","Digite aqui");
var numero2 = prompt("Informe o segundo número","Digite aqui");
var operacao = prompt("Informe o operador: \nAdição (+) \nSubtração (-)\nMultiplicação (*) \nDivisão(\\)","Digite aqui");
var resultado;
switch(operacao){
    case "+":
    resultado = parseFloat(numero1) + parseFloat(numero2);
    break;
    case "-":
    resultado = parseFloat(numero1) - parseFloat(numero2);
    break;
    case "*":
    resultado = parseFloat(numero1) * parseFloat(numero2);
    break;
    case "/":
    resultado = parseFloat(numero1) / parseFloat(numero2);
    break;
    default:
    alert("Operação inválida");
    break;
    }
    alert(`O resultado é ${resultado}`)