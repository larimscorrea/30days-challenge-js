<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var numero = prompt("Digite um número entre 1 e 3","Digite aqui");
        if(numero == 1){
        console.log("Número 1");
        } else if(numero == 2){
        console.log("Número 2");
        } else if(numero == 3){
        console.log("Número 3");
        } else{
        console.log("Opção inválida");
        }

        // Ou podemos fazer com switch

        var numero = prompt("Digite um número entre 1 e 3","Digite aqui");
        switch (numero) {
        case "1":
        console.log("Número 1");
        break;
        case "2":
        console.log("Número 2");
        break;
        case "3":
        console.log("Número 3");
        break;
        default:
        console.log("Opção inválida");
        break;
        }

        // Dia da semana

        switch(diaDaSemana){
        case 1:
        diaDaSemanaExtenso = "domingo";
        break;
        case 2:
        diaDaSemanaExtenso = "segundafeira";
        break;
        case 3:
        diaDaSemanaExtenso = "terça-feira";
        break;
        case 4:
        diaDaSemanaExtenso = "quarta-feira";
        break;
        case 5:
        diaDaSemanaExtenso = "quinta-feira";
        break;
        case 6:
        diaDaSemanaExtenso = "sexta-feira";
        break;
        default:
        diaDaSemanaExtenso = "sábado";
        break;
}
    console.log(`Hoje é ${diaDaSemanaExtenso}.`)
    </script>
</body>
</html>