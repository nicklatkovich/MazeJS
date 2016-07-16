/**
 * Created by NickLatkovich on 14.07.2016.
 */

function MazeViewer(surface) {
    this.surface = surface;
    this.cellViewer = new CellViewer(this);
    this.maze = null;

    this.draw = function (maze) {
        this.maze = maze;
        this.surface.beginPath();
        this.surface.clearRect(0, 0, this.surface.width, this.surface.height);
        this.scale = Math.min(
            this.surface.canvas.width / maze.width,
            this.surface.canvas.height / maze.height
        );
        // TODO: Подумать над: "Убрать зависимость paddingX"
        // Использовать для этого перемещение канваса
        this.paddingX = (this.surface.canvas.width - maze.width * this.scale) / 2;
        this.paddingY = (this.surface.canvas.height - maze.height * this.scale) / 2;
        for (var i = 0; i < maze.width; i++) {
            for (var j = 0; j < maze.height; j++) {
                this.cellViewer.draw(maze.map[i][j]);
            }
        }
        this.surface.fill();
        this.surface.closePath();
    }
}