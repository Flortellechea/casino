/*
¡Claro! Aquí tienes un resumen de cómo se juega al Blackjack:

Objetivo:
El objetivo es conseguir una mano con un valor total lo más cercano posible a 21 sin pasarse. También debes superar el total de la mano del crupier.

Valor de las cartas:
Cartas numéricas: Valen su número.
Jotas, reinas y reyes: Valen 10.
Ases: Pueden valer 1 o 11, dependiendo de lo que sea más beneficioso para la mano.
Reglas básicas:
Inicio del juego:

Cada jugador recibe dos cartas visibles.
El crupier recibe dos cartas, una visible y otra oculta.
Opciones del jugador:

Pedir (Hit): Solicitar otra carta.
Plantarse (Stand): Mantener tu mano actual.
Doblar (Double Down): Duplicar tu apuesta y recibir solo una carta más.
Dividir (Split): Si tienes dos cartas del mismo valor, puedes dividirlas en dos manos separadas, con una nueva apuesta.
Rendirse (Surrender): En algunos casinos, puedes rendirte y recuperar la mitad de tu apuesta.
Turno del crupier:

Si el total es 16 o menos, debe pedir carta.
Si el total es 17 o más, debe plantarse.
Ganador:

Ganas si tu mano es mayor que la del crupier sin pasarte de 21.
Si el crupier se pasa de 21, todos los jugadores que no se hayan pasado ganan.
Si empatas con el crupier, se considera un push (nadie gana ni pierde).*/
import * as rls from 'readline-sync';
import {Casino} from './casino'

export class Blackjack extends Casino{
    private crupier:string[]= [];
    private player:string[]= [];
    private palos: string[] = ['♠', '♥', '♣', '♦'];
    private valores: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private mazo: string[] = [];
    private apuestaBJ:number;
    private valorApuesta:number;
  
    constructor(dinero:number, apuesta:number) {
      super(dinero)
      this.mazo;
      this.apuestaBJ = apuesta;
    }
  
    public crearMazo(): void {
      this.mazo = [];
      for (const palo of this.palos) {
        for (const valor of this.valores) {
          this.mazo.push(`${valor} ${palo}`);
        }
      }
    }
  
    public repartir(): string {
      if (this.mazo.length === 0) {
        throw new Error("No quedan cartas en el mazo");
      }
      const indiceMazo = Math.floor(Math.random() * this.mazo.length);
      return this.mazo.splice(indiceMazo, 1)[0]; 
    }
    public apuesta():number{
      this.valorApuesta = rls.questionInt('Elige el valor de la apuesta:\n1- 2:2 (Ganas doble, perdes doble)\n2- 3:3 (Ganas triple, perdes triple)');
      this.valorApuesta = this.valorApuesta +1;
      if(this.valorApuesta!== 1 && this.valorApuesta !== 2){
        console.log('Ingrese una opcion valida');
        this.apuesta();
      }
      return this.valorApuesta;
    }

    public juego():void{
      this.player = [this.repartir(), this.repartir()];
      this.crupier = [this.repartir(), this.repartir()];

      console.log(this.player.join('|'))
      console.log(this.crupier[0]);

      let opcion:string = rls.question('¿Que quieres hacer?\n1. Nueva carta\n2. Ahi nomas\n');
      while(opcion === '1'){
        this.getHit();
        this.player.push(this.repartir());
        opcion = rls.question('¿Que quieres hacer?\n1. Nueva carta\n2. Ahi nomas\n');
      }
      if(opcion === '2'){
        console.log(this.crupier);
        while(this.valorMano(this.crupier)<16){
          this.crupier.push(this.repartir());
        } 
      }
      
    }
    public resultado():number{
      console.log('El valor de tu mano es: '+this.valorMano(this.player))
      console.log('El valor de la mano del Crupier: '+this.valorMano(this.crupier));
      if(this.valorMano(this.player)>this.valorMano(this.crupier) && this.valorMano(this.player)<=21){
        console.log('Felicitaciones!! Has ganado');
        this.dinero = this.dinero + this.apuestaBJ*this.apuesta();
      } else if(this.valorMano(this.player)<this.valorMano(this.crupier)){
        console.log('Mala ronda!')
        this.dinero = this.dinero - this.apuestaBJ*this.apuesta()
      }else{
        console.log('Empate');
      }
      return this.dinero;
    }

    public valorMano(mano:string[]):number{
      let vMano:number = 0;
      let as:number = 0;

      for (const carta of mano) {
        const [valorCarta] = carta.split(' ');
        if (!isNaN(parseInt(valorCarta))) {
          vMano += parseInt(valorCarta);
        } else if (valorCarta === 'A') {
            as++;
            vMano += 11;
        } else {
            vMano += 10;
        }
      }

      while (vMano > 21 && as > 0) {
        vMano -= 10;
        as--;
      }

    return vMano;
    
    }

    public getHit():string{
      return 'Hit';
    }

    public getApuestaBJ():number{
      return this.apuestaBJ;
    }

    public setApuestaBJ(apuestaB:number):void{
      this.apuestaBJ = apuestaB;
    }
}