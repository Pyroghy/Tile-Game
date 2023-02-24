import { Tile } from "../structures/Tile";

export class TileMatrix {
    public width: number;
    public rows: number;

    public matrix: Tile[] = [];

    public constructor(width: number, rows: number) {
        this.width = width;
        this.rows = rows;
    }

    public createMatrix() {
        const tileSize = Math.round((this.width / this.rows) * 0.98);
        const padding = Math.round((this.width - tileSize * this.rows) / (this.rows + 1));
        const paddingAdjustment = Math.abs((this.width - (tileSize * this.rows + padding * (this.rows + 1))) / 2);
        const getPadding = (e: any) => (tileSize + padding) * e + padding + paddingAdjustment;

        // generates it
        for (let i = 0; i < this.rows; i++) {
            const y = getPadding(i);

            for (let j = 0; j < this.rows; j++) {
                const x = getPadding(j);
                const tile = new Tile(x, y, tileSize, tileSize);
                this.matrix.push(tile);
            }
        }

        // makes 4 random tiles black
        for (let i = 0; i < this.rows; i++) {
            const randomTile = this.getRandomTile();
            randomTile.color = "black";
        }
    }

    public createNextMatrix() {
        const nextMatrix = [];

        const tileSize = Math.round((this.width / this.rows) * 0.98);
        const padding = Math.round((this.width - tileSize * this.rows) / (this.rows + 1));
        const paddingAdjustment = Math.abs((this.width - (tileSize * this.rows + padding * (this.rows + 1))) / 2);
        const getPadding = (e: any) => (tileSize + padding) * e + padding + paddingAdjustment;

        // generates it
        for (let i = 0; i < this.rows; i++) {
            const y = getPadding(i);

            for (let j = 0; j < this.rows; j++) {
                const x = getPadding(j);
                const tile = new Tile(x, y, tileSize, tileSize);
                nextMatrix.push(tile)
            }
        }

        // makes 4 random tiles black
        for (let i = 0; i < this.rows; i++) {
            let randomTile = this.getRandomTile();
            let tileIndex = this.matrix.indexOf(randomTile);

            while (this.matrix[tileIndex].color === "green") {
                randomTile = this.getRandomTile();
                tileIndex = this.matrix.indexOf(randomTile);
            }

            nextMatrix[tileIndex] = randomTile;
            nextMatrix[tileIndex].color = "black";
        }

        this.matrix = nextMatrix;
    }

    public getTile(x: number, y: number): Tile {
        return this.matrix.find(tile => x >= tile.x && x < tile.x + tile.width && y >= tile.y && y < tile.y + tile.height);
    }

    public getRandomTile(): Tile {

        if (this.matrix.length <= 0) {
            console.log("Matrix is empty!");
            return;
        }

        let randomIndex = Math.floor(Math.random() * this.matrix.length);

        while (this.matrix[randomIndex].color === "black") {
            randomIndex = Math.floor(Math.random() * this.matrix.length);
        }

        return this.matrix[randomIndex];
    }
}