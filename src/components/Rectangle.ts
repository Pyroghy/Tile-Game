export class Rectangle {
    public context: CanvasRenderingContext2D;

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public color: string;

    public constructor(context: CanvasRenderingContext2D, rectangle: any) {
        this.context = context;

        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        this.color = rectangle.color;
    }
}