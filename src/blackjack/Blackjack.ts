import * as readlineSync from 'readline-sync';
import { Jugable } from '../casino/Jugable';
import { MazoCartas } from './MazoCartas';
import { MazoPoker } from './MazoPoker';
import { Carta } from './Carta';

export class Blackjack implements Jugable {
 
    constructor() {}

    private consultarApuesta(apuestaActual: number, saldo:number) {
      let apuestaValida = false;
      let apuesta = apuestaActual;
      while (!apuestaValida) {
          const seleccion = readlineSync.question(`Ingrese apuesta entre 10 y 100 o enter si mantiene la misma ($${apuesta}): `);
          if (Number(seleccion) >= 10 && Number(seleccion) <= 100 && saldo >= Number(seleccion)) {
              apuesta = Number(seleccion);
              apuestaValida = true;
          } else if (seleccion == '') {
              // repite apuesta
              if (saldo >= apuestaActual) {
                  apuestaValida = true;
              } else {
                  console.log("Apuesta invalida, saldo insuficiente para la seleccion actual"); 
              }
          } else {
               console.log("Apuesta invalida, reintente");   
          }
      }
      return apuesta;
  }

    public jugar(montoInicial: number): number {
      console.log(`Bienvenido a BlackJack, Soy Jhonnie tu grupier, con 17 me planto`);
      let saldo = montoInicial;
      let jugando = true;
      let apuesta = 10;
      const mazo:MazoCartas = new MazoPoker();
      mazo.mezclar();
      while (jugando && saldo > 10) {
          apuesta = this.consultarApuesta(apuesta, saldo);
          const resultadoJ = this.jugadaJugador(mazo);
          let resultadoG = 0;
          if (resultadoJ != 22 && resultadoJ > 0) {
            resultadoG= this.jugadaGrupier(mazo, resultadoJ);
          }
          if (resultadoJ > resultadoG) {
            saldo = saldo + apuesta;
            console.log('');
            console.log(` Ganaste!!  Tu saldo es ${saldo}`);
            console.log('');
          } else {
            saldo = saldo - apuesta;
            console.log('');
            console.log(` Gana la casa,  Tu saldo es ${saldo}`);
            console.log('');
          }
          jugando = this.consultarSiContinua();
      }
      return saldo;
    }
   
    private consultarSiContinua() {
      const seleccion = readlineSync.question("Desea continuar (S/n): ");
      if (seleccion.toUpperCase() == 'N') {
          return false;
      }
      return true;
  }

  mostrarCartas(cartas: Carta[]): void {
    for (let index = 0; index < cartas.length; index++) {
      console.log(`${cartas[index].getNombre()}`);
    }
    console.log(`Valor: ${this.contarValor(cartas)}`)
  }

  contarValor(cartas: Carta[]): number {
    cartas.sort((carta1: Carta, carta2: Carta) => carta1.valor - carta2.valor)
    let valor = 0;
    for (let index = 0; index < cartas.length; index++) {
      const nuevoValor = valor + cartas[index].getValor();
      if (nuevoValor > 21 && cartas[index].getValor() == 11) {
        valor += 1;
      } else {
        valor += cartas[index].getValor();
      }
    }
    return valor;
  }

   jugadaJugador(mazo: MazoCartas): number {
        const cartasJugador: Carta[] = [];
        let quiereOtra = true;
        while (quiereOtra && mazo.quedanCartas()) {
          cartasJugador.push(mazo.darCarta());
          console.log('');
          console.log('Sus cartas son:');
          this.mostrarCartas(cartasJugador);
          console.log('------------------------------------');
          const valorJuego = this.contarValor(cartasJugador);
          if (valorJuego > 21) {
            return -1;
          } else if (valorJuego == 21) {
            if (cartasJugador.length == 2) {
              console.log('------------------------------------');
              console.log('-- BLACK JACK!!!!                ---');
              console.log('------------------------------------');
              return 22;
            }
            return 21;
          } else {
            const seleccion = readlineSync.question("Quiere otra carta (S/n): ");
            if (seleccion.toUpperCase() == 'N') {
              quiereOtra = false;
            } 
          }
        }
        return this.contarValor(cartasJugador);
    }

    jugadaGrupier(mazo: MazoCartas, valorjugador: number): number {
      const cartasGrupier: Carta[] = [];
      let quiereOtra = true;
      while (quiereOtra && mazo.quedanCartas()) {
        cartasGrupier.push(mazo.darCarta());
        const valorJuego = this.contarValor(cartasGrupier);
        if (valorJuego >= 17 || valorJuego > valorjugador) {
          quiereOtra = false;
        }  
      }
      console.log('');
      console.log('Grupier juega con:');
      this.mostrarCartas(cartasGrupier);
      console.log('------------------------------------');
      const valorGrupier = this.contarValor(cartasGrupier);
      if (valorGrupier > 21) {
        return 0;
      }
      return valorGrupier;
  }

}