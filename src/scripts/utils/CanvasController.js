/**
 * Created by NickLatkovich on 15.07.2016.
 */

function CanvasController(main) {
    this.timeToCheckWindowToResize = 17;
    this.main = main;
    this.windowSize = new Vector2(0, 0);
    this.intervalToCheckerToWindowResize = 0;

    this.windowIsResized = function() {
        this.main.mazeCanvas.width = this.windowSize.x = document.body.clientWidth;
        this.main.mazeCanvas.height = this.windowSize.y = document.body.clientHeight;
    };

    this.checkCanvasToResize = function () {
        if (this.windowSize.x != document.body.clientWidth ||
            this.windowSize.y != document.body.clientHeight) {
            this.windowIsResized();
        }
        this.main.mazeViewer.draw(this.main.maze);
        this.main.dynamicViewer.draw();
    };

    this.start = function () {
        this.stop();
        this.checkCanvasToResize();
        this.intervalToCheckerToWindowResize = setInterval(this.checkCanvasToResize.bind(this), this.timeToCheckWindowToResize);
    };

    this.stop = function() {
        clearInterval(this.intervalToCheckerToWindowResize);
    };
}