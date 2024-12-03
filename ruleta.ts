import { Casino } from "./casino";

export class Ruleta extends Casino{
    //Deberia realizar el constructor pidiendole al user un numero a apostar
    //Con random.math saco el numero que saldria y listo
    private eleccion: number;
    private sorteo:number;
    private aposto: number;
    private min: number = 0;
    private max:number = 36;

    constructor(eleccion:number, dinero:number, aposto:number){
        super(dinero)
        this.eleccion = eleccion;
        this.aposto = aposto;
    }

    public apuesta(){
        this.aposto = this.aposto*this.dinero;
    }
    public ruleta():number{
        return this.sorteo = Math.floor(Math.random()*(this.max-this.min)+this.min);
    }

    public resultado(){
        if(this.sorteo===this.eleccion){
            console.log('N° Elegido: '+this.getEleccion())
            console.log('El numero que salio ganador fue: '+this.ruleta()+' Felicitaciones')
            this.dinero += this.aposto;
        }
        else{
            console.log('N° Elegido: '+this.getEleccion())
            console.log('El numero que salio ganador fue: '+this.ruleta()+' Intenta nuevamente')
            this.dinero -=this.aposto
            if(this.dinero<= 0){
                console.log('Has perdido todo tu dinero.\nIngresa mas para jugar nuevamente')
            }
        }
    }
    public getEleccion():number{
        return this.eleccion;
    }
    public setEleccion(eleccion:number):void{
        this.eleccion = eleccion;
    }
}