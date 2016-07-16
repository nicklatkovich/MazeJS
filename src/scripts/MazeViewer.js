/**
 * Created by NickLatkovich on 14.07.2016.
 */

function MazeViewer(surface) {
    this.surface = surface;
    this.maze = null;

    this.draw = function (maze) {
        this.maze = maze;
        this.surface.beginPath();
        this.surface.clearRect(0, 0, this.surface.width, this.surface.height);
        this.scale = Math.min(
            this.surface.canvas.width / maze.width,
            this.surface.canvas.height / maze.height
        );
        this.paddingX = (this.surface.canvas.width - maze.width * this.scale) / 2;
        this.paddingY = (this.surface.canvas.height - maze.height * this.scale) / 2;
        for (var i = 0; i < maze.width; i++) {
            for (var j = 0; j < maze.height; j++) {
                if (maze.map[i][j].state == Cell.STATES.WALL) {
                    this.surface.fillRect(i * this.scale + this.paddingX, j * this.scale + this.paddingY, this.scale + 1, this.scale + 1);
                }
                else {
                    
                }
            }
        }
        this.surface.fill();
        this.surface.closePath();
    }
}