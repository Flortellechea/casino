import { Casino } from "./casino";
import { tragamonedas } from "./tragamoneda";

export class Moderno extends Casino implements tragamonedas {

    private num1:number;
    private num2:number;
    private num3:number;
    private num4:number;
    private num5:number;
    private num6:number;
    private num7:number;
    private num8:number;
    private num9:number;
    private min:number = 0;
    private max:number = 9;

    constructor(dinero:number){
     super(dinero)
    }
    public modo(){
        console.log('Bienvenido al modo Tragamonedas Moderno')
    }

    public juego(): void {
        this.num1 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num2 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num3 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num4 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num5 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num6 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num7 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num8 = Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.num9 = Math.floor(Math.random()*(this.max-this.min)+this.min);

    }

    public resultado(){
        if (this.num1 === this.num2 && this.num1 === this.num3 || this.num1 === this.num4 && this.num1 === this.num7 ||
            this.num4 === this.num5 && this.num4 === this.num6 || this.num2 === this.num5 && this.num2 === this.num8 ||
            this.num7 === this.num8 && this.num7 === this.num9 || this.num3 === this.num6 && this.num3 === this.num9 ||
            this.num1 === this.num2 && this.num1 === this.num3 && this.num1 === this.num4 && this.num1 === this.num5 && this.num1 === this.num6 && this.num1 === this.num7 && this.num1 === this.num8 && this.num1 === this.num9
        ){
            console.log('|'+this.num1+'|'+'|'+this.num2+'|'+'|'+this.num3+'|');
            console.log('|'+this.num4+'|'+'|'+this.num5+'|'+'|'+this.num6+'|');
            console.log('|'+this.num7+'|'+'|'+this.num8+'|'+'|'+this.num9+'|');
            console.log('\nFelicitaciones! Has ganado');
        }
        else{
            console.log('|'+this.num1+'|'+'|'+this.num2+'|'+'|'+this.num3+'|');
            console.log('|'+this.num4+'|'+'|'+this.num5+'|'+'|'+this.num6+'|');
            console.log('|'+this.num7+'|'+'|'+this.num8+'|'+'|'+this.num9+'|');
            console.log('\nHoy no es tu día, intenta nuevamente')
        }
    }

    public apuesta() {
        
    }
}