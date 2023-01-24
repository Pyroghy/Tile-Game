import { Gamemode } from "./Gamemode";

export class TimedMode extends Gamemode {
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

    public onClick({ target, clientX, clientY }: any): void {
        const bounds = target.getBoundingClientRect();
        const clickedTile = this.getTile(clientX - bounds.left, clientY - bounds.top);

        switch (clickedTile.color) {
            case "white":
                clickedTile.color = "crimson";
                this.redrawTile(clickedTile);
                clickedTile.color = "white";

                setTimeout(() => {
                    this.redrawTile(clickedTile);
                    this.scoreBoard.updateScore();
                }, 60);

                break;
            case "black":
                clickedTile.color = "limegreen";
                this.redrawTile(clickedTile);
                clickedTile.color = "white";

                setTimeout(() => {
                    this.redrawTile(clickedTile);

                    const randomTile = this.getRandomTile(clickedTile);
                    randomTile.color = "black";
                    this.redrawTile(randomTile);
                    this.scoreBoard.updateScore(true);
                }, 60);

                break;
            default:
                break;
        }
    }
}