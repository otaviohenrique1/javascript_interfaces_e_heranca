export class Cliente {
  constructor(nome, cpf) {
    this._nome = nome;
    this._cpf = cpf;
  }

  get nome() {
    return this._nome;
  }

  get cpf() {
    return this._cpf;
  }
}

/*
export class Cliente {
  nome;
  #cpf;

  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }

  get nome() {
    return this.nome;
  }

  get cpf() {
    return this.#cpf;
  }
}
*/