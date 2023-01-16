class Treinador {
  constructor(listaDePokemons) {
    this.listaDePokemons = listaDePokemons;
  }
}

export class Jogador extends Treinador {
  constructor(nome) {
    super();
    this.nome = nome;
  }
}

export class Inimigo extends Treinador {
  constructor(nivel) {
    super();
    this.nivel = nivel;
  }
}
