function MazeGen() {
    this.map = null;
    this.width = 0;
    this.height = 0;
    this.xstart = null;
    this.ystart = null;

    this.generate = function(width, height) {
        this.width = width;
        this.height = height;
        var map = this.map = new Array(width);
        var i;
        for (i = 0; i < width; i++) {
            map[i] = new Array(height);
            for (var j = 0; j < height; j++) {
                map[i][j] = new Cell(Cell.STATES.EMPTY);
            }
        }
        var xstart = this.xstart = Utils.irandom(width);
        var ystart = this.ystart = Utils.irandom(height);
        var lastY = height - 1;
        var lastX = width - 1;
        for (i = 0; i < width; i++) {
            map[i][0].state = Cell.STATES.WALL;
            map[i][lastY].state = Cell.STATES.WALL;
        }
        for (i = 1; i < lastY; i++) {
            map[0][i].state = Cell.STATES.WALL;
            map[lastX][i].state = Cell.STATES.WALL;
        }
        return map;
    }
}