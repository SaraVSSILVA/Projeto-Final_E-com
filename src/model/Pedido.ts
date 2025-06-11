export class Pedido {
    private _id: number; // Identificador único do pedido
    private _codigoBebe: number; // Código do bebê reborn relacionado ao pedido
    private _quantidade: number; // Quantidade de itens no pedido
    private _data: Date; // Data de criação do pedido
    private _status: string; // Status atual do pedido (Pendente, Confirmado, Cancelado)

    // Construtor inicializa os atributos do pedido
    constructor(id: number, codigoBebe: number, quantidade: number, data: Date) {
        this._id = id;
        this._codigoBebe = codigoBebe;
        this._quantidade = quantidade;
        this._data = data;
        this._status = "Pendente"; // Todo novo pedido começa como pendente
    }

    get id(): number {
        return this._id;
    }

    get codigoBebe(): number {
        return this._codigoBebe;
    }
    set codigoBebe(value: number) {
        this._codigoBebe = value;
    }

    get quantidade(): number {
        return this._quantidade;
    }
    set quantidade(value: number) {
        this._quantidade = value;
    }

    get data(): Date {
        return this._data;
    }
    set data(value: Date) {
        this._data = value;
    }

    get status(): string {
        return this._status;
    }

   public confirmarPedido(): void {
        this._status = "Confirmado";
        console.log(`Pedido #${this._id} confirmado com sucesso!`);
    }

    public cancelarPedido(): void {
        this._status = "Cancelado";
        console.log(`Pedido #${this._id} cancelado.`);
    }

    public visualizarPedido(): void {
        console.log(
            `Pedido #${this._id} | Bebê: ${this._codigoBebe} | Quantidade: ${this._quantidade} | Data: ${this._data.toLocaleString()} | Status: ${this._status}`
        );
    }
}