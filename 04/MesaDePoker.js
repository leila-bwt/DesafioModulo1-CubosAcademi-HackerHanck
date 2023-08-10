const valores = [1,2,3,4,5,6];
let max = 9;
let min = 2;
let valoresValidos = [];

for (let item of valores){
    if(item >= min && item <= max){
        valoresValidos.push(item)
    }
}

console.log(valoresValidos)

