import { Simbolos } from "./Simbolos";
import { Tragamoneda } from "./Tragamoneda";

export class TresLineasTragamoneda extends Tragamoneda{
    
    private slots: string[][];

    constructor() {
        super();
        this.slots = [['','',''],['','',''],['','','']];
    }

    getNombreMaquina():string {
        return "En 3 Lineas!! La apuesta se divide x 5 y tenes 5 lineas de pago";
    }

    evaluarLineaPago(slot1: string, slot2: string, slot3: string) {
        if (slot1 == slot2 && slot1 == slot3) {
            return 20;
        } 
        if (slot1 == slot2) {
            return 1.5;
        }
        return 0;
    }

    tirarApuesta(apuesta: number): number {
        const simbolos = new Simbolos(); 
        for (let indexX = 0; indexX < 3; indexX++) {
            for (let indexY = 0; indexY < 3; indexY++) {
                this.slots[indexX][indexY] = simbolos.getSimboloAleatorio();
            }
        }
        console.log('');
        console.log('|---|---|---|');
        for (let index = 0; index < this.slots.length; index++) {
            const lineaSlots = this.slots[index];
            console.log(`| ${lineaSlots[0]} | ${lineaSlots[1]} | ${lineaSlots[2]} |`);
        }
        console.log('|---|---|---|');
        console.log('');

        const resultado: number = (apuesta / 5 * this.evaluarLineaPago(this.slots[0][0], this.slots[0][1], this.slots[0][2])) +
        (apuesta / 5 * this.evaluarLineaPago(this.slots[1][0], this.slots[1][1], this.slots[1][2])) +
        (apuesta / 5 * this.evaluarLineaPago(this.slots[2][0], this.slots[2][1], this.slots[2][2])) +
        (apuesta / 5 * this.evaluarLineaPago(this.slots[0][0], this.slots[1][1], this.slots[2][2])) +
        (apuesta / 5 * this.evaluarLineaPago(this.slots[2][0], this.slots[1][1], this.slots[0][2]));
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