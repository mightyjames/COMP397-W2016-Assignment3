module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        public static END: number = 2;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
        public static PLAYER_LIVES = 5;
        public static LABEL_FONT = "40px Consolas";
        public static LABEL_CONTENT_FONT = "20px Consolas";
        public static LABEL_COLOUR = "#FFFF00";
    }



}