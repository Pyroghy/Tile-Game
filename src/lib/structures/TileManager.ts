import type { Tile } from "../structures/Tile";
import { TileMatrix } from "./TileMatrix";

interface MatrixOptions {
    width: number;
    rows: number;
}

interface RedrawOptions {
    color?: string | null;
}

export class TileManager extends TileMatrix {
    public context: CanvasRenderingContext2D;

    public constructor(context: CanvasRenderingContext2D, options: MatrixOptions) {
        super(options.width, options.rows);
        this.context = context;
    }

    public draw(tile: Tile) {
        this.context.fillStyle = tile.color;
        this.context.fillRect(tile.x, tile.y, tile.width, tile.height);
    }

    public redraw(tile: Tile, options?: RedrawOptions) {
        this.context.clearRect(tile.x, tile.y, tile.width, tile.height);
        this.context.fillStyle = options?.color ?? tile.color;
        this.context.fillRect(tile.x, tile.y, tile.width, tile.height);
    }

    public drawTiles() {
        for (const tile of this.tiles) {
            this.draw(tile);
        }
    }

    public redrawTiles() {
        this.context.clearRect(0, 0, this.width, this.width);
        this.drawTiles();
    }
}