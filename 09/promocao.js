const precos = [100, 100, 100];

let soma = 0;
let menorPreco = precos[0];

for(let itemAtual of precos){
    soma += itemAtual;
    if (itemAtual < menorPreco){
        menorPreco = itemAtual
    }
}

if(precos.length >= 3){
    let itemComDesconto = 50 / 100 * menorPreco   
    console.log((soma - menorPreco)+itemComDesconto)
} else {
    console.log(soma);
}    


