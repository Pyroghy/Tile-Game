import type { Tile } from "../structures/Tile";
import { TileContext } from "./TileContext";
import { TileMatrix } from "../structures/TileMatrix";

export class TileManager {
    public tileMatrix: TileMatrix;
    public tileContext: TileContext;

    public constructor(canvas: HTMLCanvasElement) {
        this.tileMatrix = new TileMatrix(canvas.width, 4);
        this.tileContext = new TileContext(canvas);
    }

    public update(tile: Tile, options?: any): void {
        this.tileContext.redraw(tile, options);
    }

    public updateAll(options: { clickable: number }): void {
        this.tileMatrix.createMatrix(options.clickable);
        this.tileContext.redrawAll(this.tileMatrix.tiles);
    }
}