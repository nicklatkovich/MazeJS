/**
 * Created by NickLatkovich on 7/16/2016.
 */

function WallsViewer(mazeViewer) {
    this.wallWidth = 0.2;
    this.mazeViewer = mazeViewer;
    this.surface = mazeViewer.surface;

    this.draw = function (x, y, dir) {
        switch (dir) {
            case Directions.NAMES.UP:
                this.surface.fillRect(
                    this.mazeViewer.paddingX + x * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.mazeViewer.paddingY + y * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.mazeViewer.scale + this.wallWidth * this.mazeViewer.scale,
                    this.wallWidth * this.mazeViewer.scale
                );
                break;
            case Directions.NAMES.LEFT:
                this.surface.fillRect(
                    this.mazeViewer.paddingX + x * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.mazeViewer.paddingY + y * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.wallWidth * this.mazeViewer.scale,
                    this.mazeViewer.scale + this.wallWidth * this.mazeViewer.scale
                );
                break;
            case Directions.NAMES.RIGHT:
                this.surface.fillRect(
                    this.mazeViewer.paddingX + (x + 1) * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.mazeViewer.paddingY + y * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.wallWidth * this.mazeViewer.scale,
                    this.mazeViewer.scale + this.wallWidth * this.mazeViewer.scale
                );
                break;
            case Directions.NAMES.DOWN:
                this.surface.fillRect(
                    this.mazeViewer.paddingX + x * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.mazeViewer.paddingY + (y + 1) * this.mazeViewer.scale - this.mazeViewer.scale * this.wallWidth / 2,
                    this.mazeViewer.scale + this.wallWidth * this.mazeViewer.scale,
                    this.wallWidth * this.mazeViewer.scale
                );
                break;
        }
    }
}
