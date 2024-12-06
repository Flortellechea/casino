import * as readlineSync from 'readline-sync';
import { Jugable } from "../casino/Jugable";

export abstract class Tragamoneda implements Jugable{

    constructor() {}

    public jugar(montoInicial: number): number {
        console.log(`Bienvenido a ${this.getNombreMaquina()}`);
        let saldo = montoInicial;
        let jugando = true;
        let apuesta = 10;
        while (jugando && saldo > 10) {
            apuesta = this.consultarApuesta(apuesta, saldo);
            const resultado = this.tirarApuesta(apuesta);
            saldo = saldo + resultado - apuesta;
            console.log('');
            console.log(`   Su saldo es ${saldo}`);
            console.log('');
            jugando = this.consultarSiContinua();
        }
        
        return saldo;
    }

    abstract getNombreMaquina():string;

    private consultarApuesta(apuestaActual: number, saldo:number) {
        let apuestaValida = false;
        let apuesta = apuestaActual;
        while (!apuestaValida) {
            const seleccion = readlineSync.question(`Ingrese apuesta entre 10 y 100 o enter si mantiene la misma ($${apuesta}): `);
            if (Number(seleccion) >= 10 && Number(seleccion) <= 100 && saldo >= Number(seleccion)) {
                apuesta = Number(seleccion);
                apuestaValida = true;
            } else if (seleccion == '') {
                // repite apuesta
                if (saldo >= apuestaActual) {
                    apuestaValida = true;
                } else {
                    console.log("Apuesta invalida, saldo insuficiente para la seleccion actual"); 
                }
            } else {
                 console.log("Apuesta invalida, reintente");   
            }
        }
        return apuesta;
    }

    private consultarSiContinua() {
        const seleccion = readlineSync.question("Desea continuar (S/n): ");
        if (seleccion.toUpperCase() == 'N') {
            return false;
        }
        return true;
    }

    abstract tirarApuesta(apuesta:number):number;
}