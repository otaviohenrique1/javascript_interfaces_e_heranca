import { Cliente } from "../Cliente.js";

  /* Classe abstrata */
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta) {
      throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata");
    }

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

  /* Metodo abstrato */
  saque(valor) {
    throw new Error("O metodo saque da classe Conta é abstrato");
    // let taxa = 1;
    // return this._saque(taxa, valor);
  }
  
  _saque(taxa, valor) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
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