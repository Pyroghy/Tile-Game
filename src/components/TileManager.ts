import { Tile } from "./Tile";

const gridLength = 4;

export class TileManager {
    public context: CanvasRenderingContext2D;
    public width: number;
    public height: number;
    public tileMatrix: Tile[];

    public constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.tileMatrix = [];
    }

    public initialize() {
        let tileSize = Math.floor((this.width / gridLength) * 0.98);
        let padding = Math.floor(
            (this.width - tileSize * gridLength) / (gridLength + 1)
        );

        let paddingAdjustment = Math.abs(
            (this.width -
                (tileSize * gridLength + padding * (gridLength + 1))) /
            2
        );

        let getPadding = (e: any) =>
            (tileSize + padding) * e + padding + paddingAdjustment;

        for (let i = 0; i < gridLength; i++) {
            let y = getPadding(i);

            for (let j = 0; j < gridLength; j++) {
                let x = getPadding(j);

                const tile = new Tile(this.context, {
                    x: x,
                    y: y,
                    width: tileSize,
                    height: tileSize,
                    color: "white"
                });

                this.tileMatrix.push(tile);
            }
        }
    }

    public drawAll() {
        for (const tile of this.tileMatrix) {
            tile.draw();
        }
    }
}