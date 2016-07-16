/**
 * Created by NickLatkovich on 7/16/2016.
 */

function CellViewer(mazeViewer) {
    this.surface = mazeViewer.surface;
    this.mazeViewer = mazeViewer;
    this.wallViewer = new WallsViewer(mazeViewer);

    this.draw = function (cell) {
        switch (cell.state) {
            case Cell.STATES.WALL:
            case Cell.STATES.EMPTY:
                this.surface.fillRect(
                    cell.x * this.mazeViewer.scale + this.mazeViewer.paddingX,
                    cell.y * this.mazeViewer.scale + this.mazeViewer.paddingY,
                    this.mazeViewer.scale + 1,
                    this.mazeViewer.scale + 1);
                break;
            default:
                for (var dir = 0; dir < 4; dir++) {
                    if (cell.consistWay(dir) == false) {
                        this.wallViewer.draw(cell.x, cell.y, dir);
                    }
                }
                if (main.debugMode == true) {
                    this.surface.fillText(cell.state,
                        this.mazeViewer.paddingX + (cell.x + .5) * this.mazeViewer.scale,
                        this.mazeViewer.paddingY + (cell.y + .5) * this.mazeViewer.scale
                    );
                }
                break;
        }
    }
}