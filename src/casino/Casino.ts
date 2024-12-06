import * as readlineSync from 'readline-sync';
import { TragamonedaStrategy } from '../tragamonedas/TragamonedaStrategy';
import { Tragamoneda } from '../tragamonedas/Tragamoneda';
import { Blackjack } from '../blackjack/Blackjack';
import { Jugable } from './Jugable';


export class Casino {

    constructor () {
    }

    private seleccionarJuego(): Jugable {
        console.log("Seleccione la maquina a jugar ");
        console.log("1 - Tragamonedas 1 linea");
        console.log("2 - Tragamonedas 3 lineas");
        console.log("3 - Blackjack");
        const opcionMaquina = readlineSync.questionInt("Ingrese opcion: ");
        if (opcionMaquina != 1 && opcionMaquina != 2 && opcionMaquina != 3) {
            console.log("Error opcion incorrecta");
            process.exit(0);
        }
        if (opcionMaquina < 3) {
            const maquina: Tragamoneda = new TragamonedaStrategy().getTragamoneda(opcionMaquina)
            return maquina;
        } else {
            return new Blackjack();
        }
    }

    init() {
        console.log("Bienvenido a Casino del Talpalque!!");
        let montoDisponible: number = readlineSync.questionInt("Ingrese su monto a jugar (Numero Entero entre 100 y 1000): ");
        if (montoDisponible > 1000 || montoDisponible < 100) {
            console.log("Error el numero ingresado es incorrecto");
            process.exit(0);
        }
        const juego: Jugable = this.seleccionarJuego();
        montoDisponible = juego.jugar(montoDisponible);
        console.log(`Finalizo su Juego con $${montoDisponible} de saldo`);
    }

}