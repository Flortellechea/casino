import { Carta } from "./Carta";

export class MazoCartas {
    cartas: Carta[];

    constructor(cartas: Carta[]) {
        this.cartas = cartas;
    }

    public mezclar():void {
        for (let index = 0; index < 200; index++) {
            this.cartas.sort(() => Math.random() - 0.5);           
        }
    }

    public darCarta():Carta {
        return this.cartas.shift();
    }

    public quedanCartas():boolean {
        return this.cartas.length > 0;
    }
}