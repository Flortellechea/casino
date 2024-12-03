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
exports.Moderno = void 0;
var casino_1 = require("./casino");
var Moderno = /** @class */ (function (_super) {
    __extends(Moderno, _super);
    function Moderno(dinero) {
        var _this = _super.call(this, dinero) || this;
        _this.min = 0;
        _this.max = 9;
        return _this;
    }
    Moderno.prototype.modo = function () {
        console.log('Bienvenido al modo Tragamonedas Moderno');
    };
    Moderno.prototype.juego = function () {
        this.num1 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num2 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num3 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num4 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num5 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num6 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num7 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num8 = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.num9 = Math.floor(Math.random() * (this.max - this.min) + this.min);
    };
    Moderno.prototype.resultado = function () {
        if (this.num1 === this.num2 && this.num1 === this.num3 || this.num1 === this.num4 && this.num1 === this.num7 ||
            this.num4 === this.num5 && this.num4 === this.num6 || this.num2 === this.num5 && this.num2 === this.num8 ||
            this.num7 === this.num8 && this.num7 === this.num9 || this.num3 === this.num6 && this.num3 === this.num9) {
            console.log('|' + this.num1 + '|' + '|' + this.num2 + '|' + '|' + this.num3 + '|');
            console.log('|' + this.num4 + '|' + '|' + this.num5 + '|' + '|' + this.num6 + '|');
            console.log('|' + this.num7 + '|' + '|' + this.num8 + '|' + '|' + this.num9 + '|');
            console.log('\nFelicitaciones! Has ganado');
        }
        else {
            console.log('|' + this.num1 + '|' + '|' + this.num2 + '|' + '|' + this.num3 + '|');
            console.log('|' + this.num4 + '|' + '|' + this.num5 + '|' + '|' + this.num6 + '|');
            console.log('|' + this.num7 + '|' + '|' + this.num8 + '|' + '|' + this.num9 + '|');
            console.log('\nHoy no es tu día, intenta nuevamente');
        }
    };
    Moderno.prototype.apuesta = function () {
    };
    return Moderno;
}(casino_1.Casino));
exports.Moderno = Moderno;
