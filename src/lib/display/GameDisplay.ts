import { TileManager } from "../structures/TileManager";

export class GameDisplay {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    public tileContext: TileManager;

    public score = 0;

    public setCanvas(canvas: HTMLCanvasElement): void {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.width;
        this.canvas = canvas;
    }

    public setTileContext(): void {
        this.context = this.canvas.getContext("2d");
        this.tileContext = new TileManager(this.context, { width: this.canvas.width, rows: 4 });
    }

    public update(id: string, value: number) {
        const element = document.getElementById(id);
        element.innerText = value.toString();
    }

    public setScore(points: number) {
        this.score += points;
        this.update("score", this.score);
    }
}
