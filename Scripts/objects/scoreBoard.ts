module objects {
    // Scoreboard Class
    export class Scoreboard {
        private stage: createjs.Stage;
        private game: createjs.Container;
        public lives: number;
        public score: number;
        private label: createjs.Text;
        private labelText: string = "";
        private width: number;
        private height: number;
        private _player: objects.Player;

        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        update() {
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
        }

        destroy() {
            game.removeChild(this.label);
        }
    }
} 