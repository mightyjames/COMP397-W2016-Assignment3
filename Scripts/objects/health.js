var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var HealthOrb = (function (_super) {
        __extends(HealthOrb, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function HealthOrb() {
            _super.call(this, "health");
            this._speed.y = 5; //island speed
            this._reset(this._topBounds);
            this.name = "health";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        HealthOrb.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        // reset the ocean offscreen
        HealthOrb.prototype._reset = function (value) {
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        HealthOrb.prototype.update = function () {
            // scroll the island 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return HealthOrb;
    }(objects.GameObject));
    objects.HealthOrb = HealthOrb;
})(objects || (objects = {}));

//# sourceMappingURL=health.js.map
