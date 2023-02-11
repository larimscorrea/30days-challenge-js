var dataCompleta;
dataCompleta = new Date;
dataCompleta.getDay(); // dia da semana em número
dataCompleta.getDate(); // dia do mês
dataCompleta.getMonth();
dataCompleta.getFullYear();
dataCompleta.getHours();
dataCompleta.getMinutes();
dataCompleta.getSeconds();
var horaAtual;
dataCompleta = new Date();
horaAtual = dataCompleta.getHours();

if (horaAtual < 12) {
    alert("Bom dia");
    } else if(horaAtual < 18){
    alert("Boa tarde");
    } else{
    alert("Boa noite");
}