const jogadores = [
  {
    "nome": "Herman",
    "jogada": 0
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 1
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
];

let jogada0 = 0;
let jogada1 = 0;

for (let jogador of jogadores) {
  if (jogador.jogada === 0) {
    jogada0++;
  } else {
    jogada1++;
  }
}

if (jogada0 === 1) {
  sorteado = jogadores.find((jogador) => jogador.jogada === 0)
  console.log(sorteado.nome);
} else if (jogada1 === 1) {
  sorteado = jogadores.find((jogador) => jogador.jogada === 1)
  console.log(sorteado.nome);
} else {
  console.log("NINGUEM");
}


