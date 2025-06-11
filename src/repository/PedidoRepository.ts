import { Pedido } from "../model/Pedido"; // Importa o modelo Pedido

export class PedidoRepository {
    private pedidos: Pedido[] = []; // Array que armazena todos os pedidos em memória
    private proximoId: number = 1; // Controla o próximo ID a ser atribuído a um novo pedido

    // Cria um novo pedido e adiciona ao array, se a quantidade for válida
    criar(codigoBebe: number, quantidade: number): boolean {
        if (quantidade <= 0) return false;
        const pedido = new Pedido(this.proximoId++, codigoBebe, quantidade, new Date());
        this.pedidos.push(pedido);
        return true;
    }

    listar(): Pedido[] {
        return this.pedidos;
    }

    atualizar(id: number, codigoBebe: number, quantidade: number): boolean {
        const pedido = this.pedidos.find(p => p.id === id);
        if (!pedido) return false;
        if (codigoBebe) pedido.codigoBebe = codigoBebe;
        if (quantidade > 0) pedido.quantidade = quantidade;
        pedido.data = new Date();
        return true;
    }

    remover(id: number): boolean {
        const index = this.pedidos.findIndex(p => p.id === id);
        if (index === -1) return false;
        this.pedidos.splice(index, 1);
        return true;
    }
    
     buscarPorId(id: number): Pedido | undefined {
        return this.pedidos.find(p => p.id === id);
    }

    confirmar(id: number): boolean {
        const pedido = this.buscarPorId(id);
        if (!pedido) return false;
        if (pedido.status !== "Pendente") return false;
        pedido.confirmarPedido();
        return true;
    }

    cancelar(id: number): boolean {
        const pedido = this.buscarPorId(id);
        if (!pedido) return false;
        if (pedido.status !== "Pendente") return false;
        pedido.cancelarPedido();
        return true;
    }
}