function MazeGen() {
    this.map = null;
    this.width = 0;
    this.height = 0;
    this.xstart = null;
    this.ystart = null;

    this.build = function(width, height) {
        var map = new Array(width);
        for (var i = 0; i < width; i++) {
            map[i] = new Array(height);
            for (var j = 0; j < height; j++) {
                map[i][j] = new Cell();
            }
        }
        var xstart = Utils.irandom(width);
        var ystart = Utils.irandom(height);
    }
}