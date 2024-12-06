import { Tragamoneda } from "./Tragamoneda";
import { TresLineasTragamoneda } from "./TresLineasTragamoneda";
import { UnaLineaTragamoneda } from "./UnaLineaTragamoneda";

export class TragamonedaStrategy {
    constructor() {
    }

    public getTragamoneda(opcion: number):Tragamoneda {
        if (opcion == 1) {
            return new UnaLineaTragamoneda();
        } else {
            return new TresLineasTragamoneda();
        }
    }
}