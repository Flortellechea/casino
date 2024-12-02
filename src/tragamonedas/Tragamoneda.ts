export abstract class Tragamoneda {
    protected monto:number;
    constructor(montoInicial: number) {
        this.monto = montoInicial;
    }



    public jugar():number {
        console.log(`Bienvenido a ${this.getNombreMaquina()}`)
        return 0;
    }

    abstract getNombreMaquina():string;
}