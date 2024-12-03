import { Tragamoneda } from "./Tragamoneda";

export class TresLineasTragamoneda extends Tragamoneda{
    constructor(montoInicial: number) {
        super(montoInicial);
    }

    getNombreMaquina():string {
        return "En 3 Lineas FUNN";
    }
}