import { Simbolos } from "./Simbolos";
import { Tragamoneda } from "./Tragamoneda";

export class UnaLineaTragamoneda extends Tragamoneda {

    private slots: string[];

    constructor() {
        super();
        this.slots = ['','',''];
    }

    getNombreMaquina():string {
        return "En 1 Linea Simple!! Solo una linea de pago.";
    }

    evaluarLineaPago(slot1: string, slot2: string, slot3: string) {
        if (slot1 == slot2 && slot1 == slot3) {
            return 3;
        } 
        if (slot1 == slot2) {
            return 1.5;
        }
        return 0;
    }

    tirarApuesta(apuesta: number): number {
        const simbolos = new Simbolos(); 
        for (let index = 0; index < 3; index++) {
            this.slots[index] = simbolos.getSimboloAleatorio();
        }
        console.log('');
        console.log('|---|---|---|');
        console.log(`| ${this.slots[0]} | ${this.slots[1]} | ${this.slots[2]} |`);
        console.log('|---|---|---|');
        console.log('');

        const resultado: number = apuesta * this.evaluarLineaPago(this.slots[0], this.slots[1], this.slots[2]);
        if (resultado > 0) {
            console.log('---------------------------------------------------------');
            console.log(`Felicitaciones ganaste $${resultado}`);
            console.log('---------------------------------------------------------');
        } else {
            console.log('---------------------------------------------------------');
            console.log(' Sin premio :( ');
            console.log('---------------------------------------------------------');
        }
        return resultado;
    }
}