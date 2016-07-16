function Cell(state) {
    this.state = state;

    this.consistWay = function (direction) {
        return (this.state % Directions.get(direction) == 0);
    };

    this.canMoveUp = function () {
        return this.consistWay(Directions.NAMES.UP);
    };

    this.canMoveLeft = function () {
        return this.consistWay(Directions.NAMES.LEFT);
    };

    this.canMoveDown = function () {
        return this.consistWay(Directions.NAMES.DOWN);
    };

    this.canMoveRight = function () {
        return this.consistWay(Directions.NAMES.RIGHT);
    }
}

Cell.STATES = {
    EMPTY: 0,
    WAY: 1,
    WALL: 4,
    CHECKED: 6
};
