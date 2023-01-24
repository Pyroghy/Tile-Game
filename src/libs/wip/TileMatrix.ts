import { Tile } from "../../components/Tile";

export class TileMatrix {
    public matrix: Tile[];
    public width: number;
    public rows: number;

    public constructor(width: number, rows: number) {
        this.matrix = [];
        this.width = width;
        this.rows = rows;

        for (let i = 0; i < this.rows; i++) {
            const y = this.getPadding(i);

            for (let j = 0; j < this.rows; j++) {
                const x = this.getPadding(j);
                const tile = new Tile({ x: x, y: y, width: this.tileSize, height: this.tileSize }); // do i even need a class for the Tile?
                this.matrix.push(tile);
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
}

export function createTileMatrix(width: number, rows: number) {
    const matrix: Tile[] = [];

    const tileSize = Math.floor((width / rows) * 0.98);
    const padding = Math.floor((width - tileSize * rows) / (rows + 1));
    const paddingAdjustment = Math.abs((width - (tileSize * rows + padding * (rows + 1))) / 2);
    const getPadding = (index: number) => (tileSize + padding) * index + padding + paddingAdjustment;

    for (let i = 0; i < rows; i++) {
        const y = getPadding(i);

        for (let j = 0; j < rows; j++) {
            const x = getPadding(j);
            const tile = new Tile({ x: x, y: y, width: tileSize, height: tileSize });
            matrix.push(tile);
        }
    }

    return matrix;
}