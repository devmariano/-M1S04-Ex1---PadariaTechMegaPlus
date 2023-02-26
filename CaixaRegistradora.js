class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.conta = 0;
      this.resumo = ""
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
      console.log(`Produto ${novoProduto.nome} adicionado ao estoque`);
    }
  
    listarEstoque() {
      console.log("Produtos no estoque:");
      this.estoque.forEach((produto) => {
        console.log(`- ${produto.nome} (código de barras: ${produto.codigoBarra}, preço: R$${produto.preco.toFixed(2)})`);
      });
    }
  
    listarEstoqueHtml() {
      const lista = document.createElement("ul");
      this.estoque.forEach((produto) => {
        const item = document.createElement("li");
        item.innerText = `${produto.nome} (código de barras: ${produto.codigoBarra}, preço: R$${produto.preco.toFixed(2)})`;
        lista.appendChild(item);
      });
      const container = document.getElementById("estoque-container");
      container.innerHTML = "Lista de produtos no estoque";
      container.appendChild(lista);
    }
  
    iniciarAtendimento(nomeCliente) {
      console.log(`Iniciando atendimento para ${nomeCliente}`);
      //document.getElementById("iniciar").disabled = true;
      this.resumo = ""
      document.getElementById("mensagem").innerHTML = `--mensagem de status--`;
      document.getElementById("resumo").innerHTML = `--resumo da compra--`;
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (produto) {
        this.conta += produto.preco * quantidade;
        this.resumo+= (`${quantidade}x ${produto.nome} = R$ ${(produto.preco * quantidade).toFixed(2)}<br>`);
        document.getElementById("resumo").innerHTML = this.resumo;
        console.log(`${quantidade}x ${produto.nome} adicionado(s) à conta`);
        document.getElementById("mensagem").innerHTML = `Item ${codigoBarra} adicionado à conta`;
      } else {
        document.getElementById("mensagem").innerHTML = `Produto com código de barras ${codigoBarra} não encontrado no estoque`;
        console.log(`Produto com código de barras ${codigoBarra} não encontrado no estoque`);
      }
    }
  
    verificarTotal() {
      console.log(`Total da conta: R$${this.conta.toFixed(2)}`);
      return this.conta;
    }
 
    listaTotal() {
        this.resumo+=`Total da conta: R$${this.conta.toFixed(2)}`
        document.getElementById("resumo").innerHTML = this.resumo;
      }
  
    fecharConta(dinheiro) {
      const troco = dinheiro - this.conta;
      if (troco >= 0) {
        console.log(`Conta fechada com sucesso! Troco: R$${troco.toFixed(2)}`);
        this.resumo+=`<br>Valor recebido: R$${dinheiro.toFixed(2)}<br> Troco: R$${troco.toFixed(2)}<br>Conta fechada com sucesso!`
        document.getElementById("resumo").innerHTML = this.resumo;
        //this.estoque = [];
        this.conta = 0;
      } else {
        console.log(`Dinheiro insuficiente para fechar a conta`);
        document.getElementById("mensagem").innerHTML = `Dinheiro insuficiente para fechar a conta`;
      }
    }
  }