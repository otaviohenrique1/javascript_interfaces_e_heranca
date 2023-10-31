export class Cliente {
  constructor(nome, cpf, senha) {
    this._nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  get nome() {
    return this._nome;
  }

  get cpf() {
    return this._cpf;
  }

  autenticar(senha) {
    return senha == this._senha;
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