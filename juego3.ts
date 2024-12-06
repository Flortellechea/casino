export class Poker {
    private cartaA1: string = "";
    private cartaA2: string = "";
    private cartaB1: string = "";
    private cartaB2: string = "";
    private flop1: string = "";
    private flop2: string = "";
    private flop3: string = "";
    private turn: string = "";
    private river: string = "";
    private palos: string[] = ['♠', '♥', '♣', '♦'];
    private valores: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private mazo: string[] = [];
  
    constructor() {
      this.crearMazo();
    }
  
    public crearMazo(): void {
      this.mazo = [];
      for (const palo of this.palos) {
        for (const valor of this.valores) {
          this.mazo.push(`${valor} de ${palo}`);
        }
      }
    }
  
    private repartir(): string {
      if (this.mazo.length === 0) {
        throw new Error("No quedan cartas en el mazo");
      }
      const indiceMazo = Math.floor(Math.random() * this.mazo.length);
      return this.mazo.splice(indiceMazo, 1)[0]; 
    }
  
    public setPlayer1(): void {
      this.cartaA1 = this.repartir();
      this.cartaA2 = this.repartir();
    }
  
    public setPlayer2(): void {
      this.cartaB1 = this.repartir();
      this.cartaB2 = this.repartir();
    }
  
    public setFlop(): void {
      this.flop1 = this.repartir();
      this.flop2 = this.repartir();
      this.flop3 = this.repartir();
    }
  
    public setTurn(): void {
      this.turn = this.repartir();
    }
  
    public setRiver(): void {
      this.river = this.repartir();
    }
  
    public aJugar(): void {
      this.setPlayer1();
      this.setPlayer2();
      this.setFlop();
      this.setTurn();
      this.setRiver();
      console.log(`Jugador 1: ${this.cartaA1}, ${this.cartaA2}`);
      console.log(`Jugador 2: ${this.cartaB1}, ${this.cartaB2}`);
      console.log(`Flop: ${this.flop1}, ${this.flop2}, ${this.flop3}`);
      console.log(`Turn: ${this.turn}`);
      console.log(`River: ${this.river}`);
    }
  }
  
  