import { Tragamoneda } from "./Tragamoneda";

export class UnaLineaTragamoneda extends Tragamoneda {

    constructor(montoInicial: number) {
        super(montoInicial);
    }

    getNombreMaquina():string {
        return "En 1 Linea Simple!!";
    }
}