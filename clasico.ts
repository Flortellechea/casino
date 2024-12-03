import { tragamonedas } from "./tragamoneda";
import { Casino } from "./casino";

export class Clasico extends Casino implements tragamonedas{

    private num1:number;
    private num2:number;
    private num3:number;
    private min:number = 0;
    private max:number = 9;

    constructor(dinero:number){
        super(dinero)
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
    }
    public modo(){
        console.log('Bienvenido al modo Tragamonedas Clasico')
    }

    public juego(): void {
        this.num1 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num2 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num3 = Math.floor(Math.random()*(this.max-this.min)+this.min);

    }

    public resultado(){
        if(this.num1 === this.num2 && this.num1===this.num3){
            console.log('|'+this.num1+'|'+'|'+this.num2+'|'+'|'+this.num3+'|');
            console.log('\nFelicitaciones! Has ganado');
        }
        else{
            console.log('|'+this.num1+'|'+'|'+this.num2+'|'+'|'+this.num3+'|');
            console.log('\nHoy no es tu día, intenta nuevamente')
        }
    }

    public apuesta() {
        
    }
}