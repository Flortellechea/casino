import { Casino } from "./casino";

export interface tragamonedas extends Casino{
    //Para el clasico, tres variables con el random.math y chequear que coincidan o no
    //Para el moderno, se me ocurren 9 variables en tres vectores o 1 matriz de 3x3 con diferentes combinaciones para ganar


    modo():void;

    juego():void;

}