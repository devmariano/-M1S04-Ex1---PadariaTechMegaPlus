class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.conta = 0;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
    }
  
    iniciarAtendimento(nomeCliente) {
      console.log(`Iniciando atendimento para ${nomeCliente}`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (produto) {
        this.conta += produto.preco * quantidade;
        console.log(`${quantidade}x ${produto.nome} adicionado(s) à conta`);
      } else {
        console.log(`Produto com código de barras ${codigoBarra} não encontrado no estoque`);
      }
    }
  
    verificarTotal() {
      console.log(`Total da conta: R$${this.conta.toFixed(2)}`);
      return this.conta;
    }
  
    fecharConta(dinheiro) {
      const troco = dinheiro - this.conta;
      if (troco >= 0) {
        console.log(`Conta fechada com sucesso! Troco: R$${troco.toFixed(2)}`);
        this.estoque = [];
        this.conta = 0;
      } else {
        console.log(`Dinheiro insuficiente para fechar a conta`);
      }
    }
  }