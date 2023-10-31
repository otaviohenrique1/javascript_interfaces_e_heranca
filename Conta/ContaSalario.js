import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente) {
    super(0, cliente, 100);
  }

  saque(valor) {
    const taxa = 1.01;
    this._saque(taxa, valor);
  }
}
