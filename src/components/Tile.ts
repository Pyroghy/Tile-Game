import { Rectangle } from "./Rectangle";

export class Tile extends Rectangle {
    public constructor(context: CanvasRenderingContext2D, rectangle: any) {
        super(context, {
            x: rectangle.x,
            y: rectangle.y,
            width: rectangle.width,
            height: rectangle.height,
            color: rectangle.color
        });
    }

    public draw() {
        this.context.clearRect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    public get self() {
        return this;
    }
}