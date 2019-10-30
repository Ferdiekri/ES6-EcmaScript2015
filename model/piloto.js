var Piloto = (function () {
    function Piloto() {
        this._nombre = "";
    }
    Object.defineProperty(Piloto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    return Piloto;
}());
//# sourceMappingURL=piloto.js.map