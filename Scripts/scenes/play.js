var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
/// <reference path="../objects/scoreBoard.ts" />
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            createjs.Sound.play('policeSiren');
            // Set Police Count
            this._policeCount = 3;
            // Instantiate Police array
            this._police = new Array();
            // added road to the scene
            this._road = new objects.Road();
            this.addChild(this._road);
            // added health to the scene
            this._health = new objects.HealthOrb();
            this.addChild(this._health);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added police to the scene
            for (var police = 0; police < this._policeCount; police++) {
                this._police[police] = new objects.Police();
                this.addChild(this._police[police]);
            }
            this._scoreLabel = new objects.Label(this._player.playerHealth.toString(), "14px Consolas", "#ff0000", 225, 78, false);
            this._scoreLabel.textAlign = "right";
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._road.update();
            this._health.update();
            this._player.update();
            this._police.forEach(function (police) {
                police.update();
                _this._collision.check(police);
            });
            this._collision.check(this._health);
            if (this._player.playerHealth <= 0) {
                scene = config.Scene.END;
                changeScene();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
