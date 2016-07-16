/**
 * Created by NickLatkovich on 14.07.2016.
 */

var main = new Main();
main.debugMode = true;
main.start();

function log(message) {
    if (main.debugMode == true) {
        console.log(message);
    }
}

function Main() {
    this.debugMode = false;

    this.start = function() {
        this.maze = new Maze(5, 5);
        this.mazeCanvas = document.getElementById("tagCanvasMaze");
        this.mazeSurface = this.mazeCanvas.getContext("2d");
        this.mazeViewer = new MazeViewer(this.mazeSurface);
        this.canvasController = new CanvasController(this);
        this.canvasController.start();
    }
}