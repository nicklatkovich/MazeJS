function Maze(width, height) {
    this.width = width;
    this.height = height;
    this.map = new MazeGen().generate(width, height);
}