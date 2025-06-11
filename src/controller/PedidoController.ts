import { Pedido } from "../model/Pedido";
import { PedidoRepository } from "../repository/PedidoRepository";

export class PedidoController {
    // Instância o repositório de pedidos para manipular os dados 
    private repository = new PedidoRepository();

    criar(codigoBebe: number, quantidade: number): boolean {
        return this.repository.criar(codigoBebe, quantidade);
    }
    listar(): Pedido[] {
        return this.repository.listar();
    }
    atualizar(id: number, codigoBebe: number, quantidade: number): boolean {
        return this.repository.atualizar(id, codigoBebe, quantidade);
    }
    remover(id: number): boolean {
        return this.repository.remover(id);
    }
    buscarPorId(id: number): Pedido | undefined {
        return this.repository.buscarPorId(id);
    }
    confirmar(id: number): boolean {
        return this.repository.confirmar(id);
    }
    cancelar(id: number): boolean {
        return this.repository.cancelar(id);
    }
}