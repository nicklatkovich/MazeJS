function MazeGen() {
    this.map = null;
    this.width = 0;
    this.height = 0;
    this.xstart = null;
    this.ystart = null;

    this.generate = function (width, height) {
        this.width = width;
        this.height = height;
        var map = this.map = new Array(width);
        var i;
        for (i = 0; i < width; i++) {
            map[i] = new Array(height);
            for (var j = 0; j < height; j++) {
                map[i][j] = new Cell(i, j, Cell.STATES.EMPTY);
            }
        }
        var xstart = this.xstart = 1 + Utils.irandom(width - 2);
        var ystart = this.ystart = 1 + Utils.irandom(height - 2);
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
        map[xstart][ystart].state = Cell.STATES.CHECKED;
        var ways = new Vector();
        ways.push(new Vector2(xstart, ystart));
        while (!ways.isEmpty()) {
            var randomIndex = Utils.irandom(ways.length);
            var position = ways.get(randomIndex);
            log("{" + position.x + ", " + position.y + "}");
            ways.set(randomIndex, ways.pop());
            if (map[position.x][position.y].state == Cell.STATES.CHECKED) {
                map[position.x][position.y].state = Cell.STATES.WAY;
                var directions = 0;
                for (i = 0; i < 4; i++) {
                    var newPosition = new Vector2(position.x + Differ.dx(i), position.y + Differ.dy(i));
                    switch (map[newPosition.x][newPosition.y].state) {
                        case Cell.STATES.WAY:
                            directions++;
                            break;
                        case Cell.STATES.EMPTY:
                            map[newPosition.x][newPosition.y].state = Cell.STATES.CHECKED;
                            ways.push(newPosition);
                            break;
                    }
                }
                if (directions > 0) {
                    var randomDirection = Utils.irandom(directions);
                    var dir = 0;
                    var nextPosition = null;
                    while (randomDirection >= 0) {
                        nextPosition = new Vector2(position.x + Differ.dx(dir), position.y + Differ.dy(dir));
                        if (map[nextPosition.x][nextPosition.y].state = Cell.STATES.WAY) {
                            randomDirection--;
                        }
                        if (randomDirection >= 0) {
                            dir++;
                        }
                    }
                    log(dir);
                    map[position.x][position.y].state *= Directions.get(dir);
                    map[nextPosition.x][nextPosition.y].state *= Directions.get(dir + 2);
                }
            }
            var report = "";
            for (i = 0; i < ways.length; i++) {
                report += "{" + ways.memory[i].x + ", " + ways.memory[i].y + "}" + " ";
            }
        }
        return map;
    }
}