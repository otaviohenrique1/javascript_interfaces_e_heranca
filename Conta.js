import { Cliente } from "./Cliente.js";

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
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