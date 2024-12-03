import { Tragamoneda } from "./Tragamoneda";
import { TresLineasTragamoneda } from "./TresLineasTragamoneda";
import { UnaLineaTragamoneda } from "./UnaLineaTragamoneda";

export class TragamonedaStrategy {
    constructor() {
    }

    public getTragamoneda(opcion: number, montoInicial:number):Tragamoneda {
        if (opcion == 1) {
            return new UnaLineaTragamoneda(montoInicial);
        } else {
            return new TresLineasTragamoneda(montoInicial);
        }
    }
}