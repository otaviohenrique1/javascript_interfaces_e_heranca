import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    super(0, cliente, agencia)
    ContaCorrente.numeroDeContas++;
  }

  saque(valor) {
    let taxa = 1.1;
    return this._saque(taxa, valor);
  }
}

/*
import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas++;
  }

  set cliente(cliente) {
    if (cliente instanceof Cliente) {
      this._cliente = cliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get agencia() {
    return this._agencia;
  }

  saque(valor) {
    if (this._saldo <= valor) {
      return;
    }
    this._saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  get saldo() {
    return this._saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }
}
*/

/*
import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  #agencia;
  // _agencia;
  #cliente;
  // _cliente;
  #saldo = 0;
  // _saldo = 0;

  constructor(agencia, cliente) {
    this.#agencia = agencia;
    this.#cliente = cliente;
    ContaCorrente.numeroDeContas++;
  }

  set cliente(cliente) {
    if (cliente instanceof Cliente) {
      this.#cliente = cliente;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  // setCliente(cliente) {
  //   this.#cliente = cliente;
  // }

  // getCliente() {
  //   return this.#cliente;
  // }

  get agencia() {
    return this.#agencia;
  }

  // setAgencia(agencia) {
  //   this.#agencia = agencia;
  // }

  // getAgencia() {
  //   return this.#agencia;
  // }

  saque(valor) {
    if (this.#saldo <= valor) {
      return;
    }
    this.#saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.#saldo += valor;
  }

  extrato() {
    return this.#saldo;
  }

  get saldo() {
    return this.#saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }
}
*/

/*
import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  #agencia;
  // _agencia;
  #cliente;
  // _cliente;
  #saldo = 0;
  // _saldo = 0;

  set cliente(cliente) {
    if (cliente instanceof Cliente) {
      this.#cliente = cliente;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  // setCliente(cliente) {
  //   this.#cliente = cliente;
  // }

  // getCliente() {
  //   return this.#cliente;
  // }

  setAgencia(agencia) {
    this.#agencia = agencia;
  }

  getAgencia() {
    return this.#agencia;
  }

  saque(valor) {
    if (this.#saldo <= valor) {
      return;
    }
    this.#saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.#saldo += valor;
  }

  extrato() {
    return this.#saldo;
  }

  get saldo() {
    return this.#saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }
}
*/

/*
export class ContaCorrente {
  #agencia;
  #cliente;
  #saldo = 0;

  setCliente(cliente) {
    this.#cliente = cliente;
  }

  getCliente() {
    return this.#cliente;
  }

  setAgencia(agencia) {
    this.#agencia = agencia;
  }

  getAgencia() {
    return this.#agencia;
  }

  saque(valor) {
    if (this.#saldo <= valor) {
      return;
    }
    this.#saldo -= valor;
    return valor;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this.#saldo += valor;
  }

  extrato() {
    return this.#saldo;
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }
}
*/