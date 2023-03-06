import type { Tile } from "../structures/Tile";
import { Gamemode } from "./Gamemode";

export class TimedMode extends Gamemode {
    public start(): void {
        const startTime = Date.now();
        const gameDuration = 30;

        this.display.tileContext.createMatrix(3);
        this.display.tileContext.redrawTiles();

        this.startTime = startTime;
        this.gameTimer = setInterval(() => {
            const timeLeft = (Date.now() - startTime) / 1000;

            this.display.update("counter", Math.round(gameDuration - timeLeft));

            if (timeLeft >= gameDuration) {
                this.emit("stop", { score: this.display.score, accuracy: Math.round(this.accuracy * 100) });
                this.stop();
            }
        }, 1000);
    }

    public stop(): void {
        clearInterval(this.gameTimer);

        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.score = 0;
        this.display.update("score", 0);
        this.display.update("counter", 30);
        this.display.update("accuracy", 0);
    }

    public restart(): void {
        this.stop();
        this.start();
    }

    public onBlackClick(clickedTile: Tile): void {
        const randomTile = this.display.tileContext.getRandomTile();
        const time = (Date.now() - this.startTime) / 1000;

        this.display.tileContext.redraw(clickedTile, { color: "limegreen" });

        setTimeout(() => {
            this.display.updateTile(randomTile, "black");
            this.display.updateTile(clickedTile, "white");
            this.display.increaseScore(Math.round(1 / time) + 1);
            this.startTime = Date.now();
        }, 60);
    }

    public onWhiteClick(clickedTile: Tile): void {
        this.display.tileContext.redraw(clickedTile, { color: "crimson" });

        setTimeout(() => {
            this.display.tileContext.redraw(clickedTile, { color: "white" });
            this.display.decreaseScore(this.totalWhiteHits);
        }, 60);
    }

    public onClick(tile: Tile): void {
        switch (tile.color) {
            case "black":
                this.totalBlackHits++;
                this.onBlackClick(tile);
                break;
            case "white":
                this.totalWhiteHits++;
                this.onWhiteClick(tile);
                break;
        }

        this.display.update("accuracy", Math.round(this.accuracy * 100));
    }
}