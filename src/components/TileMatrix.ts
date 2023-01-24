import { Tile } from "./Tile";

export class TileMatrix {
    public tileMatrix: Tile[];
    public width: number;
    public rows: number;

    public constructor(width: number, rows: number) {
        this.tileMatrix = [];
        this.width = width;
        this.rows = rows;

        for (let i = 0; i < this.rows; i++) {
            const y = this.getPadding(i);

            for (let j = 0; j < this.rows; j++) {
                const x = this.getPadding(j);
                const tile = new Tile({ x: x, y: y, width: this.tileSize, height: this.tileSize }); // do i even need a class for the Tile?
                this.tileMatrix.push(tile);
            }
        }
    }

    private get tileSize() {
        return Math.floor((this.width / this.rows) * 0.98);
    }

    private get gap() {
        return Math.floor((this.width - this.tileSize * this.rows) / (this.rows + 1));
    }

    private get paddingAdjustment() {
        return Math.abs((this.width - (this.tileSize * this.rows + this.gap * (this.rows + 1))) / 2);
    }

    private getPadding(index: number) {
        return (this.tileSize + this.gap) * index + this.gap + this.paddingAdjustment;
    }

    public toString() {
        return this.tileMatrix;
    }
}