import { GameDisplay } from "../display/GameDisplay";
import type { Tile } from "../structures/Tile";
import { Gamemode } from "./Gamemode";

export class TestMode extends Gamemode {
    public display = new GameDisplay();
    public gameTimer: any;

    public setGameTimer(gameDuration: number) {
        const startTime = this.startTime;
        this.gameTimer = setInterval(() => {
            const timeLeft = (Date.now() - startTime) / 1000;

            this.display.update("counter", Math.round(gameDuration - timeLeft));

            if (timeLeft >= gameDuration) {
                const totalHits = this.totalBlackHits + this.totalWhiteHits;

                this.emit("stop", {
                    score: this.display.score,
                    accuracy: (this.totalBlackHits / totalHits) * 100,
                });

                this.stop();
            }
        }, 1000);
    }

    public start(): void {
        this.display.tileContext.createMatrix(3);
        this.display.tileContext.redrawTiles();

        this.startTime = Date.now();
        this.setGameTimer(30);
    }

    public stop(): void {
        clearInterval(this.gameTimer);

        this.display.score = 0;

        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.update("score", 0);
        this.display.update("counter", 30);
        this.display.update("accuracy", 0);
    }

    public onBlackClick(clickedTile: Tile) {
        const randomTile = this.display.tileContext.getRandomTile();
        const time = (Date.now() - this.startTime) / 1000;

        this.display.tileContext.redraw(clickedTile, { color: "limegreen" });

        setTimeout(() => {
            randomTile.color = "black";
            this.display.tileContext.redraw(randomTile);

            clickedTile.color = "white";
            this.display.tileContext.redraw(clickedTile);

            this.display.increaseScore(Math.round(1 / time) + 1);
            this.startTime = Date.now();
        }, 60);
    }

    public onWhiteClick(clickedTile: Tile) {
        this.display.tileContext.redraw(clickedTile, { color: "crimson" });

        setTimeout(() => {
            this.display.tileContext.redraw(clickedTile, { color: "white" });
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