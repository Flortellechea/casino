import { Simbolos } from "./src/tragamonedas/Simbolos"
import * as readlineSync from  'readline-sync'; 
import { Tragamoneda } from "./src/tragamonedas/Tragamoneda";
import { TragamonedaStrategy } from "./src/tragamonedas/TragamonedaStrategy";

console.log("Bienvenido a Tragamonedas del Talpalque!!");
let montoDisponible:number = readlineSync.questionInt("Ingrese su monto a jugar (Numero Entero entre 100 y 1000): ");
if (montoDisponible > 1000 || montoDisponible < 100) {
    console.log("Error el numero ingresado es incorrecto");
    process.exit(0);
}
console.log("Seleccione la maquina a jugar ");
console.log("1 - Tragamonedas 1 linea");
console.log("2 - Tragamonedas 3 lineas");
const opcionMaquina = readlineSync.questionInt("Ingrese opcion: ");
if (opcionMaquina != 1 && opcionMaquina != 2) {
    console.log("Error opcion incorrecta");
    process.exit(0);
}

const maquina: Tragamoneda = new TragamonedaStrategy().getTragamoneda(opcionMaquina, montoDisponible)
montoDisponible = maquina.jugar();

console.log(`Finalizo su Juego con $${montoDisponible} de saldo`);