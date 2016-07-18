/**
 * Created by NickLatkovich on 14.07.2016.
 */

var main = new Main();
main.debugMode = false;
main.start();

function log(message) {
    if (main.debugMode == true) {
        console.log(message);
    }
}

function Main() {
    this.debugMode = false;
    this.player = new Player(1, 1);

    this.start = function() {
        this.maze = new Maze(20, 20);
        this.mazeCanvas = document.getElementById("tagCanvasMaze");
        this.mazeSurface = this.mazeCanvas.getContext("2d");
        this.dynamicCanvas = document.getElementById("tagCanvasDynamic");
        this.dynamicSurface = this.dynamicCanvas.getContext("2d");
        this.mazeViewer = new MazeViewer(this.mazeSurface);
        this.dynamicViewer = new DynamicViewer();
        this.canvasController = new CanvasController(this);
        this.canvasController.start();
    }
}