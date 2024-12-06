"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poker = void 0;
var Poker = /** @class */ (function () {
    function Poker() {
        this.cartaA1 = "";
        this.cartaA2 = "";
        this.cartaB1 = "";
        this.cartaB2 = "";
        this.flop1 = "";
        this.flop2 = "";
        this.flop3 = "";
        this.turn = "";
        this.river = "";
        this.palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
        this.valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.mazo = [];
        this.crearMazo();
    }
    Poker.prototype.crearMazo = function () {
        this.mazo = [];
        for (var _i = 0, _a = this.palos; _i < _a.length; _i++) {
            var palo = _a[_i];
            for (var _b = 0, _c = this.valores; _b < _c.length; _b++) {
                var valor = _c[_b];
                this.mazo.push("".concat(valor, " de ").concat(palo));
            }
        }
    };
    Poker.prototype.repartir = function () {
        if (this.mazo.length === 0) {
            throw new Error("No quedan cartas en el mazo");
        }
        var indiceMazo = Math.floor(Math.random() * this.mazo.length);
        return this.mazo.splice(indiceMazo, 1)[0]; // Elimina y devuelve la carta
    };
    Poker.prototype.setPlayer1 = function () {
        this.cartaA1 = this.repartir();
        this.cartaA2 = this.repartir();
    };
    Poker.prototype.setPlayer2 = function () {
        this.cartaB1 = this.repartir();
        this.cartaB2 = this.repartir();
    };
    Poker.prototype.setFlop = function () {
        this.flop1 = this.repartir();
        this.flop2 = this.repartir();
        this.flop3 = this.repartir();
    };
    Poker.prototype.setTurn = function () {
        this.turn = this.repartir();
    };
    Poker.prototype.setRiver = function () {
        this.river = this.repartir();
    };
    Poker.prototype.aJugar = function () {
        this.setPlayer1();
        this.setPlayer2();
        this.setFlop();
        this.setTurn();
        this.setRiver();
        console.log("Jugador 1: ".concat(this.cartaA1, ", ").concat(this.cartaA2));
        console.log("Jugador 2: ".concat(this.cartaB1, ", ").concat(this.cartaB2));
        console.log("Flop: ".concat(this.flop1, ", ").concat(this.flop2, ", ").concat(this.flop3));
        console.log("Turn: ".concat(this.turn));
        console.log("River: ".concat(this.river));
    };
    return Poker;
}());
exports.Poker = Poker;
