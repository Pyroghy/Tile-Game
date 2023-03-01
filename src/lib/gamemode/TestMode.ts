import { GameDisplay } from "../display/GameDisplay";
import type { Tile } from "../structures/Tile";
import { Gamemode } from "./Gamemode";

export class TestMode extends Gamemode {
    public display = new GameDisplay();

    public setGameTimer(gameDuration: number, onGameEnd: Function) {
        const startTime = this.startTime;
        const timer = setInterval(() => {
            const timeLeft = (Date.now() - startTime) / 1000;

            this.display.update("counter", Math.round(timeLeft));

            if (timeLeft >= gameDuration) {
                this.stop(onGameEnd);
                clearInterval(timer);
            }
        }, 1000);
    }

    public start(onGameEnd: Function): void {
        this.display.tileContext.createMatrix(3);
        this.display.tileContext.redrawTiles();

        this.startTime = Date.now();
        this.setGameTimer(30, onGameEnd);
    }

    public restart(): void {
        throw new Error("Method not implemented.");
    }

    public stop(gameEnd: Function): void {
        gameEnd();

        this.display.score = 0;

        this.resetBlackHits();
        this.resetWhiteHits();

        this.display.update("score", 0);
        this.display.update("counter", 30);
        this.display.update("accuracy", 0);
    }

    public onBlackClick(clickedTile: Tile) {
        const time = (Date.now() - this.startTime) / 1000;

        this.display.tileContext.redraw(clickedTile, { color: "limegreen" });

        setTimeout(() => {
            const randomTile = this.display.tileContext.getRandomTile();
            randomTile.color = "black";

            this.display.tileContext.redraw(randomTile);
            this.display.tileContext.redraw(clickedTile, { color: "white" });
            clickedTile.color = "white";

            // adds to score - rename
            this.display.setScore(
                Math.round(this.accuracy * (1 / time + 1))
            );

            this.blackHits = 0;
            this.whiteHits = 0;
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
                this.increaseBlackHits();
                this.onBlackClick(tile);
                break;
            case "white":
                this.increaseWhiteHits();
                this.onWhiteClick(tile);
                break;
        }

        this.display.update("accuracy", Math.round(this.accuracy * 100));
    }
}