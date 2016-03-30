module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        private _police: objects.Police;
        private _scoreBoard: objects.Scoreboard;
        private _health: objects.HealthOrb;
        private _game: createjs.Container;
        
        constructor(player: objects.Player) {
            this._player = player;
            this._game = game;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();

            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;

            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                
                // check if it's an island hit
                if (object.name === "health") {
                    this._player.playerHealth += 1;
                    //this._game.removeChild(this._health);
                    createjs.Sound.play('heal');
                    console.log("health hit!");
                }
                
                // check if it's a cloud hit
                if (object.name === "police") {
                    this._player.playerHealth -= 1;
                    createjs.Sound.play('collision');
                    console.log("police hit!");
                }
            }
        }
    }
}
