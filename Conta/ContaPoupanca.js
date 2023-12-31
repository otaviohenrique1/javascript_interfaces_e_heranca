import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  saque(valor) {
    const taxa = 1.02;
    this._saque(taxa, valor);
  }
}

/*
export class ContaPoupanca {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
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