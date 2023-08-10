const texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer "

const textoFormatado = texto.trim();


let totalDePalavras = 0;
let palavra = false;


for (let contador = 0; contador < texto.length; contador++) {
    const caractere = texto[contador]; // cada letra é um numero do contador

    if (caractere === " ") {
        if (palavra) {
            totalDePalavras++;
            palavra = false;
        }
        // vai percorrer cada letra do texto
    } else {
        palavra = true;
    }
}
if (palavra) {
    totalDePalavras++;
}
console.log(totalDePalavras);
