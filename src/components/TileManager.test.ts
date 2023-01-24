import { Tile } from "./Tile";

export class TileManager {
    public context: CanvasRenderingContext2D;
    public matrix: Tile[];

    public constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.matrix = [];
    }

    public createMatrix(width: number, rows: number) {
        const tileSize = Math.floor((width / rows) * 0.98);
        const padding = Math.floor((width - tileSize * rows) / (rows + 1));
        const paddingAdjustment = Math.abs((width - (tileSize * rows + padding * (rows + 1))) / 2);
        const getPadding = (e: any) => (tileSize + padding) * e + padding + paddingAdjustment;

        for (let i = 0; i < rows; i++) {
            const y = getPadding(i);

            for (let j = 0; j < rows; j++) {
                const x = getPadding(j);
                const tile = new Tile({ x: x, y: y, width: tileSize, height: tileSize });
                this.matrix.push(tile);
            }
        }
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
        const matrixLength = this.matrix.length;
        let index = Math.floor(Math.random() * matrixLength);

        while (this.matrix[index].color === "black" || this.matrix[index] === lastTile) {
            index = Math.floor(Math.random() * matrixLength);
        }

        return this.matrix[index];
    }
}