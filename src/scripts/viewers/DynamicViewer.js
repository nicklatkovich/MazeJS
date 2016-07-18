/**
 * Created by NickLatkovich on 7/16/2016.
 */

function DynamicViewer() {
    this.draw = function() {
        main.dynamicSurface.clearRect(0, 0, main.dynamicCanvas.width, main.dynamicCanvas.height);
        main.player.draw();
    }
}