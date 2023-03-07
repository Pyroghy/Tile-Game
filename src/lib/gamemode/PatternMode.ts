import type { Tile } from "../structures/Tile";
import { Gamemode } from "./Gamemode";

export class PatternMode extends Gamemode {
    public blackHits = 0;
    public whiteHits = 0;

    public start(): void {
        const startTime = Date.now();
        const gameDuration = 30;

        this.display.tiles.updateAll({ clickable: 4 });

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
        const accuracy = this.blackHits / (this.blackHits + this.whiteHits);
        const time = (Date.now() - this.startTime) / 1000;

        this.display.tiles.update(clickedTile, { color: "limegreen" });
        clickedTile.color = "green";

        setTimeout(() => {
            this.display.tiles.update(clickedTile, { color: "white" });

            if (this.blackHits === 4) {
                setTimeout(() => {
                    this.display.increaseScore(Math.round((this.blackHits * accuracy) * (1 / time + 1)));
                    this.display.tiles.updateAll({ clickable: 4 });

                    this.blackHits = 0;
                    this.whiteHits = 0;
                    this.startTime = Date.now();
                }, 60);
            }
        }, 60);
    }

    public onWhiteClick(clickedTile: Tile): void {
        this.display.tiles.update(clickedTile, { color: "crimson" });

        setTimeout(() => {
            this.display.tiles.update(clickedTile, { color: "white" });
        }, 60);
    }

    public onClick(tile: Tile): void {
        switch (tile.color) {
            case "black":
                this.blackHits++;
                this.totalBlackHits++;
                this.onBlackClick(tile);
                break;
            case "white":
                this.whiteHits++;
                this.totalWhiteHits++;
                this.onWhiteClick(tile);
                break;
            default:
                this.whiteHits++;
                this.totalWhiteHits++;
                this.onWhiteClick(tile);
                break;
        }

        this.display.update("accuracy", Math.round(this.accuracy * 100));
    }
}