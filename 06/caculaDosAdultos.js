lista = [12, 11, 13];

let menorDosAdultos = Infinity;

for (let idade of lista) {
    if (idade >= 18 && idade < menorDosAdultos) {
        menorDosAdultos = idade
    }
}

if (menorDosAdultos < Infinity) {
    console.log(menorDosAdultos);
} else {
    console.log("CRESCA E APARECA")
}








