// PLAY SCENE
/// <reference path="../objects/scoreBoard.ts" />
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _health: objects.HealthOrb;
        private _police: objects.Police[];
        private _policeCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreboard: objects.Scoreboard;
        private _scoreLabel: objects.Label;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            createjs.Sound.play('policeSiren');
            // Set Police Count
            this._policeCount = 3;
            
            // Instantiate Police array
            this._police = new Array<objects.Police>();
                
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
            for (var police: number = 0; police < this._policeCount; police++) {
                this._police[police] = new objects.Police();
                this.addChild(this._police[police]);
            }
            
             this._scoreLabel = new objects.Label(
                this._player.playerHealth.toString(),
                "14px Consolas",
                "#ff0000",
                225, 78, false);
            this._scoreLabel.textAlign = "right";
            this.addChild(this._scoreLabel);
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);

        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._health.update();

            this._player.update();

            this._police.forEach(police => {
                police.update();
                this._collision.check(police);
            });

            this._collision.check(this._health);
           if (this._player.playerHealth <= 0) {
                scene = config.Scene.END;
                changeScene();
            }
        }
        
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}