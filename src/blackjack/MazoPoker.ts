import { Carta } from "./Carta";
import { MazoCartas } from "./MazoCartas";

export class MazoPoker extends MazoCartas {

    constructor() {
        const palos: string[] = ['Corazones', 'Picas', 'Diamantes', 'Treboles'];
        const cartas: Carta[] = [];
        for (let indexPalo = 0; indexPalo < palos.length; indexPalo++) {
            const palo = palos[indexPalo];
            for (let numero = 1; numero < 14; numero++) {
                switch (numero) {
                    case 1:
                        cartas.push(new Carta(`As de ${palo}`, 11));
                        break;
                    case 11:
                        cartas.push(new Carta(`J de ${palo}`, 10));
                        break;
                    case 12:
                        cartas.push(new Carta(`Q de ${palo}`, 10));
                        break;
                    case 13:
                        cartas.push(new Carta(`K de ${palo}`, 10));
                        break;
                    default:
                        cartas.push(new Carta(`${numero} de ${palo}`, numero));
                        break;
                }
            }
        }
        super(cartas);
    }
}