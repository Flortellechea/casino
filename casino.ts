
export abstract class Casino{
    protected dinero:number;

    constructor(dinero:number) {
        this.dinero = dinero;
    }


    public abstract apuesta()
    
}