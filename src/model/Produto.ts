export class Produto {
    private _codigo: number;
    private _nome: string;
    private _preco: number;

    // Construtor inicializa os atributos do produto
    constructor(codigo: number, nome: string, preco: number) {
        this._codigo = codigo;
        this._nome = nome;
        this._preco = preco;
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
            `Produto #${this._codigo} | Nome: ${this._nome} | Preço: R$ ${this._preco.toFixed(2)}`
        );
    }
}
