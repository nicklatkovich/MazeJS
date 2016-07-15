/**
 * Created by NickLatkovich on 14.07.2016.
 */

var main = new Main();
main.start();

function Main() {
    this.start = function() {
        this.maze = new Maze(10, 10);
        this.mazeCanvas = document.getElementById("tagCanvasMaze");
        this.mazeSurface = this.mazeCanvas.getContext("2d");
        this.mazeViewer = new MazeViewer(this.mazeSurface);
        (this.canvasController = new CanvasController(this)).start();
    }
}