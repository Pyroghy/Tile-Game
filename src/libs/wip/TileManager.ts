import type { Tile } from "../../components/Tile";
import { TileMatrix } from "./TileMatrix";

interface TileMatrixOptions {
    width: number;
    rows: number;
}

export class TileManager extends TileMatrix {
    public context: CanvasRenderingContext2D;

    public constructor(context: CanvasRenderingContext2D, options: TileMatrixOptions) {
        super(options.width, options.rows);
        this.context = context;
    }

    public drawTileMatrix() {
        for (const tile of this.matrix) {
            this.drawTile(tile);
        }
    }

    public drawTile(tile: Tile) {
        this.context.fillStyle = tile.color;
        this.context.fillRect(tile.x, tile.y, tile.width, tile.height);
    }

    public redrawTile(tile: Tile) {
        this.context.clearRect(tile.x, tile.y, tile.width, tile.height);
        this.drawTile(tile);
    }

    public getTile(x: number, y: number): Tile {
        return this.matrix.find(tile =>
            x >= tile.x &&
            x < tile.x + tile.width &&
            y >= tile.y &&
            y < tile.y + tile.height
        );
    }

    public getRandomTile(lastTile: Tile): Tile {
        const tileMatrixLength = this.matrix.length;
        let index = Math.floor(Math.random() * tileMatrixLength);

        while (this.matrix[index].color === "black" || this.matrix[index] === lastTile) {
            index = Math.floor(Math.random() * tileMatrixLength);
        }

        return this.matrix[index];
    }
}