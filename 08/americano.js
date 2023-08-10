const numeros = [1, 1, 1];
let indice = 0;
const resultado = numeros.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual
});

for(let contagem = 0; contagem < resultado; contagem++){
    if(indice >= numeros.length){
        indice = 1;
    } else {
        indice++;
    }
}

console.log(indice);
    

/*

para (let contagem = 0; contagem < soma; contagem++){
se a contagem for igual a quantidade de jogadores
então, volta para o jogador1 (índice === 1)
se não, se a contagem não for igual a quantidade de jogadores,
continue contando (índice++).



if (indice < 1){
    indice = numeros.length-1
}*/



    /*
    let soma = 0;
    for(let item of numeros){ // soma do numero de jogadores
        soma += item;
    }

    let quantidadeJogadores = numeros.length;
    let posicaoDoGoleiro = quantidadeJogadores;
    console.log(posicaoDoGoleiro);
*/
 
