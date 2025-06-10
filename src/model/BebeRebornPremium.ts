import { publicDecrypt } from "crypto";
import { Produto } from "./Produto";

export class BebeRebornPremium extends Produto {
    private _acessorios: string[];

    constructor(codigo: number, nome: string, preco: number, acessorios: string[], estoque: number = 10) {
        super(codigo, nome, preco, estoque);
        this._acessorios = acessorios;
    }

    public get acessorios(): string[] {
        return this._acessorios;
    }
    public set acessorios(value: string[]) {
        this._acessorios = value;
    }

    public adicionarAcessorio(acessorio: string): void {
        this._acessorios.push(acessorio);
        console.log(`Acessório "${acessorio}" adicionado ao bebê #${this.codigo}.`);
    }

    public removerAcessorio(acessorio: string): void {
        const index = this._acessorios.indexOf(acessorio);
        if (index !== -1) {
            this._acessorios.splice(index, 1);
            console.log(`Acessório "${acessorio}" removido do bebê #${this.codigo}.`);
        } else {
            console.log(`Acessório "${acessorio}" não encontrado.`);
        }
    }

    public visualizarProduto(): void {
        super.visualizarProduto();
        console.log(`Acessórios: ${this._acessorios.join(", ")}`);
    }
}
