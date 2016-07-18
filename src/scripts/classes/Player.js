/**
 * Created by NickLatkovich on 7/16/2016.
 */

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.scale = 0.4;

    this.draw = function () {
        main.dynamicSurface.fillRect(
            main.mazeViewer.paddingX + (x + .5 - this.scale / 2) * main.mazeViewer.scale,
            main.mazeViewer.paddingY + (x + .5 - this.scale / 2) * main.mazeViewer.scale,
            this.scale * main.mazeViewer.scale,
            this.scale * main.mazeViewer.scale
        );
    }
}