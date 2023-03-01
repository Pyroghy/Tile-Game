import { TileManager } from "../structures/TileManager";

// timed.display = new BaseDisplay(document);
// timed.display.setTileManager()

// rename GameDisplay
export class BaseDisplay {
    public canvas: HTMLCanvasElement;
    public tileContext: TileManager;

    public getCanvas(document: Document): HTMLCanvasElement {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.width;
        return canvas;
    }

    public setCanvas(document: Document): void {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.width;
    }

    public setTileContext(): void {
        const context = this.canvas.getContext("2d");

        this.tileContext = new TileManager(context, { width: this.canvas.width, rows: 4 });
    }

}
