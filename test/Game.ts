export class Game {
    public context: CanvasRenderingContext2D;
    public type: string;

    public constructor(context: CanvasRenderingContext2D, options: any) {
        this.context = context;
        this.type = options.type;
    }

    public start() {
        // gamemodes[this.type].start();
    }
}