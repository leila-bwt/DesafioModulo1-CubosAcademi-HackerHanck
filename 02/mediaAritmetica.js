const lista = [2, 3, 4];

let somaTotal = 0;
for(let item of lista){
    somaTotal = somaTotal + item;
}
let media = somaTotal / lista.length
console.log(media);