import { TileManager } from "./TileManager";

export class GameDisplay {
    public tiles: TileManager;

    public setCanvas(canvas: HTMLCanvasElement) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.width;
        this.tiles = new TileManager(canvas);
    }
}
