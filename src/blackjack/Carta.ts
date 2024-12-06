export class Carta {
    nombre: string;
    valor: number;

    constructor(nombre: string, valor: number) {
        this.nombre = nombre;
        this.valor = valor;
    }

    public getNombre() {
        return this.nombre;
    }

    public getValor() {
        return this.valor;
    }
}