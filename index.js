import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("987654321");

const cliente = new Cliente("Lais", 74548754854, "456");
const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456789");
const estaLogadoGerente = SistemaAutenticacao.login(gerente, "987654321");
const estaLogadoCliente = SistemaAutenticacao.login(cliente, "456");

console.log(estaLogadoDiretor);
console.log(estaLogadoGerente);
console.log(estaLogadoCliente);
/*
import { Cliente } from "./Cliente.js";
// import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11222222111);

const contaCorrente = new ContaCorrente(1001, cliente1);
contaCorrente.depositar(1000);
contaCorrente.saque(100);

const contaPoupanca = new ContaPoupanca(1000, cliente1, 1001);
contaPoupanca.saque(100);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.saque(100);

// console.log(cliente1);
console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);
*/

// const conta = new Conta(1000, cliente1, 1001);
// console.log(conta);
/*
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11222222111);

// const cliente1 = new Cliente()
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11222222111;

const cliente1ContaCorrente = new ContaCorrente(1001, cliente1);
// cliente1ContaCorrente.setAgencia(1001);
// cliente1ContaCorrente.setCliente(cliente1);
// cliente1ContaCorrente.cliente = cliente1;
cliente1ContaCorrente.depositar(1000);
console.log("Extrato cliente1 => " + cliente1ContaCorrente.extrato());
// console.log(cliente1ContaCorrente.extrato());
// cliente1ContaCorrente.saque(100);
// console.log(cliente1ContaCorrente.extrato());
console.log("agencia => " + cliente1ContaCorrente.agencia);
// console.log(cliente1ContaCorrente.getAgencia());
// console.log(cliente1ContaCorrente.getCliente());
// console.log(cliente1ContaCorrente.cliente);
console.log("nome => " + cliente1ContaCorrente.cliente.nome);
console.log("cpf => " + cliente1ContaCorrente.cliente.cpf);

// console.log(cliente1ContaCorrente.saque(10000));
// console.log(cliente1ContaCorrente.depositar(-1000));

const cliente2 = new Cliente("Alice", 88822233309);
// const cliente2 = new Cliente()
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const cliente2ContaCorrente = new ContaCorrente(1001, cliente2);
// cliente2ContaCorrente.setAgencia(1001);
// cliente2ContaCorrente.setCliente(cliente2);
// cliente2ContaCorrente.cliente = cliente2;

cliente1ContaCorrente.transferir(100, cliente2ContaCorrente);
// console.log("Extrato cliente1 => " + cliente1ContaCorrente.extrato());
console.log("Extrato cliente1 => " + cliente1ContaCorrente.saldo);
console.log("Extrato cliente2 => " + cliente2ContaCorrente.extrato());

console.log("agencia => " + cliente2ContaCorrente.agencia);
// console.log(cliente2ContaCorrente.getAgencia());
// console.log(cliente2ContaCorrente.getCliente());
console.log("nome => " + cliente2ContaCorrente.cliente.nome);
console.log("cpf => " + cliente2ContaCorrente.cliente.cpf);

console.log("numeroDeContas => " + ContaCorrente.numeroDeContas);
*/