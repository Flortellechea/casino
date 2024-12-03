"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clasico = void 0;
var casino_1 = require("./casino");
var Clasico = /** @class */ (function (_super) {
    __extends(Clasico, _super);
    function Clasico(dinero) {
        var _this = _super.call(this, dinero) || this;
        _this.min = 0;
        _this.max = 9;
        _this.num1 = 0;
        _this.num2 = 0;
        _this.num3 = 0;
        return _this;
    }
    Clasico.prototype.modo = function () {
        console.log('Bienvenido al modo Tragamonedas Clasico');
    };
    Clasico.prototype.juego = function () {
        this.num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num3 = Math.floor(Math.random() * (this.max - this.min) + this.min);
    };
    Clasico.prototype.resultado = function () {
        if (this.num1 === this.num2 && this.num1 === this.num3) {
            console.log('|' + this.num1 + '|' + '|' + this.num2 + '|' + '|' + this.num3 + '|');
            console.log('\nFelicitaciones! Has ganado');
        }
        else {
            console.log('|' + this.num1 + '|' + '|' + this.num2 + '|' + '|' + this.num3 + '|');
            console.log('\nHoy no es tu día, intenta nuevamente');
        }
    };
    Clasico.prototype.apuesta = function () {
    };
    return Clasico;
}(casino_1.Casino));
exports.Clasico = Clasico;
