var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelText = "";
            this.stage = stage;
            this.game = game;
            this.lives = config.Game.PLAYER_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, config.Game.LABEL_FONT, config.Game.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            game.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelText;
            if (this.lives <= 0) {
                stage.removeChild(game);
                this._player.destroy();
                game.removeAllChildren();
                game.removeAllEventListeners();
                scene = config.Scene.END;
                changeScene();
            }
        };
        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        return Scoreboard;
    }());
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));

//# sourceMappingURL=scoreBoard.js.map
