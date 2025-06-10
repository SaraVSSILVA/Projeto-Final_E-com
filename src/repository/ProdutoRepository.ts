import { Produto } from "../model/Produto";

export class ProdutoRepository {
    private produtos: Produto[] = [];
    private proximoCodigo: number = 1;
    vender: any;

    criar(nome: string, preco: number): boolean {
        if (!nome || preco <= 0) return false;
        const produto = new Produto(this.proximoCodigo++, nome, preco);
        this.produtos.push(produto);
        return true;
    }

    listar(): Produto[] {
        return this.produtos;
    }

    atualizar(codigo: number, nome: string, preco: number): boolean {
        const produto = this.produtos.find(p => p.codigo === codigo);
        if (!produto) return false;
        if (nome) produto.nome = nome;
        if (preco > 0) produto.preco = preco;
        return true;
    }

    remover(codigo: number): boolean {
        const index = this.produtos.findIndex(p => p.codigo === codigo);
        if (index === -1) return false;
        this.produtos.splice(index, 1);
        return true;
    }

     buscarPorCodigo(codigo: number): Produto | undefined {
        return this.produtos.find(p => p.codigo === codigo);
    }
}
