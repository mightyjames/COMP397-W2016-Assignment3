module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _leftBounds: number;
        private _rightBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public playerHealth: number; 
        
        private game: createjs.Container;
        constructor() {
            super(assets.getResult("car"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);

            this.y = 430;
            
            this.playerHealth = 10;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }

            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.x = stage.mouseX;
            this._checkBounds();
        }
        
         destroy() {
            //this.spaceSound.stop();
            this.game.removeChild(this);
        }
    }
}