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
    var cargaHorariaSemanal = 44;
    var saldoHoras = 0;
    var horasTrabalhadas = prompt("Informe o total de horas trabalhadas do funcionário nessa semana:",
    "Digite aqui");
    saldoHoras = horasTrabalhadas - cargaHorariaSemanal;
    if(saldoHoras > 0){
    alert("O funcionário fez " + saldoHoras + " hora(s) extra(s) nesta semana.");
    } else if(saldoHoras < 0){
    alert("O funcionário está devendo " + (saldoHoras * -1) + "hora(s) nesta semana.");
    } else {
    alert("O funcionário não possui hora extra essa semana");
    }
    alert("O funcionário está devendo " + (saldoHoras * -1) + " hora(s) nesta semana.");
    </script>
</body>
</html>