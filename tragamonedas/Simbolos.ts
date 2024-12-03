export class Simbolos {
    private simbolosDisponibles: number[];
    constructor() {
        this.simbolosDisponibles = [162, 163, 164, 165, 166, 167, 168, 169];
    }

    public getSimboloAleatorio(): string {
        // retorna un valor aleatorio entre 0 y 7
        const indiceAleatorio = Math.floor(Math.random() * 8);
        return String.fromCharCode(this.simbolosDisponibles[indiceAleatorio]);
    }
}