import { ScoreManager } from "./ScoreManager";
import { Tile } from "./Tile";

export class TileManager {
    public context: CanvasRenderingContext2D;
    public tileMatrix: Tile[];

    public scoreBoard: ScoreManager;

    public constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.tileMatrix = [];

        this.scoreBoard = new ScoreManager();
    }

    public createMatrix(width: number, rows: number) {
        const tileSize = Math.floor((width / rows) * 0.98);
        const padding = Math.floor((width - tileSize * rows) / (rows + 1));
        const paddingAdjustment = Math.abs((width - (tileSize * rows + padding * (rows + 1))) / 2);
        const getPadding = (e: any) => (tileSize + padding) * e + padding + paddingAdjustment;

        for (let i = 0; i < rows; i++) {
            let y = getPadding(i);

            for (let j = 0; j < rows; j++) {
                let x = getPadding(j);

                this.tileMatrix.push(
                    new Tile({ x: x, y: y, width: tileSize, height: tileSize })
                );
            }
        }
    }

    public startGame(rows: number) {
        const tileMatrixLength = this.tileMatrix.length;

        for (let i = 1; i < rows; i++) {
            let index = Math.floor(Math.random() * tileMatrixLength);

            while (this.tileMatrix[index].color === "black") {
                index = Math.floor(Math.random() * tileMatrixLength);
            }

            this.tileMatrix[index].color = "black";
        }

        this.drawTileMatrix();
    }

    public stopGame(width: number) {
        const boxWidth = width * 0.8;
        const boxHeight = width * 0.6;

        let x = (width / 2) - (boxWidth / 2);
        let y = (width / 2) - (boxHeight / 2);

        this.context.fillStyle = "red"
        this.context.fillRect(x, y, boxWidth, boxHeight);
    }

    public drawTile(tile: Tile) {
        this.context.fillStyle = tile.color;
        this.context.fillRect(tile.x, tile.y, tile.width, tile.height);
    }

    public drawTileMatrix() {
        for (const tile of this.tileMatrix) {
            this.drawTile(tile);
        }
    }

    public redrawTile(tile: Tile) {
        this.context.clearRect(tile.x, tile.y, tile.width, tile.height);
        this.drawTile(tile);
    }

    public getTile(x: number, y: number): Tile {
        return this.tileMatrix.find(tile =>
            x >= tile.x &&
            x < tile.x + tile.width &&
            y >= tile.y &&
            y < tile.y + tile.height
        );
    }

    public getRandomTile(lastTile: Tile): Tile {
        let index = Math.floor(Math.random() * this.tileMatrix.length);

        while (this.tileMatrix[index].color === "black" || this.tileMatrix[index] === lastTile) {
            index = Math.floor(Math.random() * this.tileMatrix.length);
        }

        return this.tileMatrix[index];
    }

    public handleClick({ target, clientX, clientY }: any): any {
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