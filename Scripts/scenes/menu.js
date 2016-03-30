var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // added road to the scene
            this._road = new objects.Road();
            this.addChild(this._road);
            //add background to the scene
            this._flash = new objects.Image("flash", 150, 0);
            this.addChild(this._flash);
            /* //Add Menu Label
             this._menuLabel = new objects.Label(
                 "MENU SCENE", "60px Consolas",
                 "#000000",
                 config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
             this.addChild(this._menuLabel);*/
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("Play", 250, config.Screen.CENTER_Y + 130, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
            this._road.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
