import type { Tile } from "../structures/Tile";

export class TileContext {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    public clear(x: number, y: number, width: number, height: number): void {
        this.context.clearRect(x, y, width, height);
    }

    public draw(tile: Tile, options?: any): void {
        this.context.fillStyle = options?.color ?? tile.color;
        this.context.fillRect(tile.x, tile.y, tile.width, tile.height);
    }

    public redraw(tile: Tile, options?: any): void {
        this.clear(tile.x, tile.y, tile.width, tile.height);
        this.draw(tile, options);
    }

    public drawAll(tiles: Tile[]): void {
        for (const tile of tiles) {
            this.draw(tile);
        }
    }

    public redrawAll(tiles: Tile[]) {
        this.clear(0, 0, this.canvas.width, this.canvas.height);
        this.drawAll(tiles);
    }
}