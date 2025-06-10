export class Produto {
    numero: number | undefined;
    private _codigo: number;
    private _nome: string;
    private _preco: number;
    private _estoque: number; // Adicione o atributo de estoque

    constructor(codigo: number, nome: string, preco: number, estoque: number = 10) {
        this._codigo = codigo;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque; // Inicialize o estoque
    }

    get codigo(): number {
        return this._codigo;
    }
    get nome(): string {
        return this._nome;
    }
    set nome(value: string) {
        this._nome = value;
    }
    get preco(): number {
        return this._preco;
    }
    set preco(value: number) {
        this._preco = value;
    }
    get estoque(): number {
        return this._estoque;
    }
    set estoque(value: number) {
        this._estoque = value;
    }

    public atualizarPreco(novoPreco: number): void {
        if (novoPreco > 0) {
            this._preco = novoPreco;
            console.log(`Preço do produto #${this._codigo} atualizado para R$ ${this._preco.toFixed(2)}`);
        } else {
            console.log("Preço inválido!");
        }
    }

    public atualizarNome(novoNome: string): void {
        if (novoNome.trim().length > 0) {
            this._nome = novoNome;
            console.log(`Nome do produto #${this._codigo} atualizado para ${this._nome}`);
        } else {
            console.log("Nome inválido!");
        }
    }

    public visualizarProduto(): void {
        console.log(
            `Produto #${this._codigo} | Nome: ${this._nome} | Preço: R$ ${this._preco.toFixed(2)} | Estoque: ${this._estoque}`
        );
    }

    public venda(quantidade: number): boolean {
        console.log('Tentando vender', quantidade, 'do produto', this._codigo, 'Encontrado:', this);
        if (this._estoque >= quantidade) {
            this._estoque -= quantidade;
            return true;
        }
        return false;
    }
}
