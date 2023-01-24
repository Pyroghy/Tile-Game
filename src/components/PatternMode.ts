import { Gamemode } from "./Gamemode";

export class PatternMode extends Gamemode {
    public constructor(context: CanvasRenderingContext2D) {
        super(context);
    }

    public start(width: number, rows: number): void {
        this.createMatrix(width, rows);
        
        const tileMatrixLength = this.matrix.length;

        for (let i = 1; i < rows; i++) {
            let index = Math.floor(Math.random() * tileMatrixLength);

            while (this.matrix[index].color === "black") {
                index = Math.floor(Math.random() * tileMatrixLength);
            }

            this.matrix[index].color = "black";
        }

        this.drawTileMatrix();
    }

    public stop(): void {
        throw new Error("Method not implemented.");
    }

    public onClick(): void {
        throw new Error("Method not implemented.");
    }
}