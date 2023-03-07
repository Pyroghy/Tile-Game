import { Tile } from "./Tile";

export class TileMatrix {
    public tiles: Tile[];
    public width: number;
    public matrixWidth: number;

    private tileWidth: number;
    private matrixGap: number;
    private matrixPadding: number;

    public constructor(width: number, matrixWidth: number) {
        this.width = width;
        this.matrixWidth = matrixWidth;

        this.tileWidth = Math.round((this.width / this.matrixWidth) * 0.98);
        this.matrixGap = Math.round((this.width - this.tileWidth * this.matrixWidth) / (this.matrixWidth + 1));
        this.matrixPadding = Math.abs((this.width - (this.tileWidth * this.matrixWidth + this.matrixGap * (this.matrixWidth + 1))) / 2);

        this.tiles = this.createBlankMatrix();
    }

    private getMatrixCoordinate(index: number): number {
        return (this.tileWidth + this.matrixGap) * index + this.matrixGap + this.matrixPadding;
    }

    public createBlankMatrix(): Tile[] {
        const matrix = [];

        for (let i = 0; i < this.matrixWidth; i++) {
            const y = this.getMatrixCoordinate(i);

            for (let j = 0; j < this.matrixWidth; j++) {
                const x = this.getMatrixCoordinate(j);
                const tile = new Tile(x, y, this.tileWidth, this.tileWidth);
                matrix.push(tile);
            }
        }

        return matrix;
    }

    public createMatrix(tileCount: number): void {
        const matrix = this.createBlankMatrix();

        for (let i = 0; i < tileCount; i++) {
            let randomTile = this.getRandomTile();
            let randomIndex = this.tiles.indexOf(randomTile);

            while (matrix[randomIndex].color !== "white") {
                randomTile = this.getRandomTile();
                randomIndex = this.tiles.indexOf(randomTile);
            }

            matrix[randomIndex] = randomTile;
            matrix[randomIndex].color = "black";
        }

        this.tiles = matrix;
    }

    public getTile(x: number, y: number): Tile {
        return this.tiles.find(tile => x >= tile.x && x < tile.x + tile.width && y >= tile.y && y < tile.y + tile.height);
    }

    public getRandomTile(): Tile {
        let randomIndex = Math.floor(Math.random() * this.tiles.length);

        while (this.tiles[randomIndex].color !== "white") {
            randomIndex = Math.floor(Math.random() * this.tiles.length);
        }

        return this.tiles[randomIndex];
    }
}