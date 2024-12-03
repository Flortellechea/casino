import { Clasico } from "./clasico";
import { Moderno } from "./moderno";
import { Ruleta } from "./ruleta";

const slot11 = new Clasico(100);
const slot2 = new Moderno(100);
const ruleta = new Ruleta(9, 50, 0.4)

slot11.modo();
slot11.juego();
slot11.resultado();

ruleta.apuesta();
ruleta.ruleta();
ruleta.resultado();

slot2.modo();
slot2.juego();
slot2.resultado();