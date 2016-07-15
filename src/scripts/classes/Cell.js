function Cell(state) {
    this.state = state;
}

Cell.STATES = {
    EMPTY: 0,
    WALL: 1,
    CHECKED: 4,
    WAY : 5
};
