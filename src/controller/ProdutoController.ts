import { Produto } from '../model/Produto';
import { ProdutoRepository } from '../repository/ProdutoRepository';

export class ProdutoController {
    private repository = new ProdutoRepository(); // Instância do repositório de produtos

    criar(nome: string, preco: number): boolean {
        return this.repository.criar(nome, preco);
    }

    listar(): Produto[] {
        return this.repository.listar();
    }
    buscarPorCodigo(codigo: number): Produto | undefined {
        return this.repository.buscarPorCodigo(codigo);
    }

    atualizar(id: number, nome: string, preco: number): boolean {
        return this.repository.atualizar(id, nome, preco);
    }

    remover(id: number): boolean {
        return this.repository.remover(id);
    }
}
