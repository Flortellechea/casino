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
exports.Ruleta = void 0;
var casino_1 = require("./casino");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(eleccion, dinero, aposto) {
        var _this = _super.call(this, dinero) || this;
        _this.min = 0;
        _this.max = 36;
        _this.eleccion = eleccion;
        _this.aposto = aposto;
        return _this;
    }
    Ruleta.prototype.apuesta = function () {
        this.aposto = this.aposto * this.dinero;
    };
    Ruleta.prototype.ruleta = function () {
        return this.sorteo = Math.floor(Math.random() * (this.max - this.min) + this.min);
    };
    Ruleta.prototype.resultado = function () {
        if (this.sorteo === this.eleccion) {
            console.log('N° Elegido: ' + this.getEleccion());
            console.log('El numero que salio ganador fue: ' + this.ruleta() + ' Felicitaciones');
            this.dinero += this.aposto;
        }
        else {
            console.log('N° Elegido: ' + this.getEleccion());
            console.log('El numero que salio ganador fue: ' + this.ruleta() + ' Intenta nuevamente');
            this.dinero -= this.aposto;
            if (this.dinero <= 0) {
                console.log('Has perdido todo tu dinero.\nIngresa mas para jugar nuevamente');
            }
        }
    };
    Ruleta.prototype.getEleccion = function () {
        return this.eleccion;
    };
    Ruleta.prototype.setEleccion = function (eleccion) {
        this.eleccion = eleccion;
    };
    return Ruleta;
}(casino_1.Casino));
exports.Ruleta = Ruleta;
