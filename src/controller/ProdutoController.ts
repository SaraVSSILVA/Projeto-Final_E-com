import { Produto } from '../model/Produto';
import { ProdutoRepository } from './../repository/ProdutoRepository';

export class ProdutoController extends ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    listarTodas(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizarProduto();
        }
    }

    criar(nome: string, preco: number, estoque: number = 10): boolean {
        const novoCodigo = this.numero++;
        const produto = new Produto(novoCodigo, nome, preco, estoque);
        this.listaProdutos.push(produto);
        return true;
    }
    listar(): Produto[] {
        return this.listaProdutos;
    }
    atualizar(codigo: number, nome: string, preco: number): boolean {
        throw new Error('Method not implemented.');
    }
    remover(codigo: number): boolean {
        throw new Error('Method not implemented.');
    }
    buscarPorCodigo(codigo: number): Produto | undefined {
        return this.listaProdutos.find(produto => produto.codigo === codigo);
    }

    public venda(numero: number, quantidade: number): boolean {
        let produto = this.buscarNoArray(numero);
        console.log('Tentando vender', quantidade, 'do produto', numero, 'Encontrado:', produto);
        if (produto !== undefined && produto !== null) {
            console.log('Estoque atual:', produto.estoque);
            if (produto.venda(quantidade)) {
                console.log('Venda realizada!');
                return true;
            } else {
                console.log('Estoque insuficiente!');
            }
        } else {
            console.log('Produto não encontrado!');
        }
        return false;
    }

    buscarNoArray(numero: number): Produto | undefined {
        return this.listaProdutos.find(produto => produto.codigo === numero);
    }
}
