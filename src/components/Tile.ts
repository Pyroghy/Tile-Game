export class Tile {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public color?: string;

    public constructor(rectangle: Tile) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        this.color = "white";
    }
}