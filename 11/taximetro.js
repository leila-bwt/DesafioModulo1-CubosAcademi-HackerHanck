let min = 25;
let km = 11.5;

let precoDaCorridaKm = 0;
let precoDaCorridaMin = 0;


if(km <= 10){
    let precoCheioCorridaKm = km * 70
    precoDaCorridaKm = precoCheioCorridaKm;
}

if(km > 10){
    let descontoKm = (10*70)+((km-10)*50)
    precoDaCorridaKm += descontoKm;
} 

if(min <= 20){
    let precoCheioCorridaMin = (min * 50)
    precoDaCorridaMin += precoCheioCorridaMin;
}


if ( min > 20){
    let descontoMin = (20*50)+((min-20) * 30)
    precoDaCorridaMin += descontoMin;
}

let valorFinal = 
console.log (precoDaCorridaMin + precoDaCorridaKm);



