import { Produto } from "./Produto"; // Importa a classe base do Produto 

// Classe que representa um Bebê Reborn Premium, herdando de Produto
    export class BebeRebornPremium extends Produto {
    // Lista de acessórios exclusivos do Bebê Premium
    private _acessorios: string[];

    // Construtor recebe código, nome, preço e acessórios 
    constructor(codigo: number, nome: string, preco: number, acessorios: string[]) {
        super(codigo, nome, preco); // Chama o constructor da clase base Produto
        this._acessorios = acessorios; // Inicializa os acessórios
    }
        // Getter para acessar os acessórios
    public get acessorios(): string[] {
        return this._acessorios;
    }
        // Setter para definir os acessórios
    public set acessorios(value: string[]) {
        this._acessorios = value;
    }
    // Adiciona um acessório à lista e exibe mensagem no console
    public adicionarAcessorio(acessorio: string): void {
        this._acessorios.push(acessorio);
        console.log(`Acessório "${acessorio}" adicionado ao bebê #${this.codigo}.`);
    }
    // Remove um acessório da lista, se existir, e exibe mensagem no console
    public removerAcessorio(acessorio: string): void {
        const index = this._acessorios.indexOf(acessorio);
        if (index !== -1) {
            this._acessorios.splice(index, 1);
            console.log(`Acessório "${acessorio}" removido do bebê #${this.codigo}.`);
        } else {
            console.log(`Acessório "${acessorio}" não encontrado.`);
        }
    }
    // Exibe as informações do produto, incluindo os acessórios
    public visualizarProduto(): void {
        super.visualizarProduto(); // Chama o método da classe base para exibir dados principais
        console.log(`Acessórios: ${this._acessorios.join(", ")}`);
    }
}
