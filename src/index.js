
function resultadoDeJogo(quantDeVitoria, quantDeDerrota) {
    
let saldo = quantDeVitoria - quantDeDerrota;
let nivel = "";
    switch (true) {
        case (saldo < 10):
            nivel = "Ferro";
            break;
        case (saldo >= 11) && (saldo <= 20):
            nivel = "Bronze";
            break;
        case (saldo >= 21) && (saldo <= 50):
            nivel = "Prata";
            break;
        case (saldo >= 51) && (saldo <= 80):
            nivel = "Ouro";
            break;
        case (saldo >= 81) && (saldo <= 90):
            nivel = "Platina";
            break;
        case (saldo > 91) && (saldo < 100):
            nivel = "Ascendente"; 
            break;
        case saldo >= 101:
            nivel = "Imortal"; 
            break;
        }
        return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`
}
console.log(resultadoDeJogo(76, 22))