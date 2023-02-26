import type { TimedDisplay } from "../../client/structures/TimedDisplay";
import type { Tile } from "../../structures/Tile";
import { Gamemode } from "../structures/Gamemode";

export class TimedMode extends Gamemode {
    public display: TimedDisplay;

    public startTime: number;
    public gameState = false;

    public score = 0;

    public blackHits = 0;
    public whiteHits = 0;

    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public async start(): Promise<void> {
        let seconds = 5;

        const countdown = setInterval(() => {
            seconds--;

            if (seconds <= 0) {
                this.gameState = true;

                clearInterval(countdown);
            }
        }, 1000);
    }

    public restart(): void {
        throw new Error("Method not implemented.");
    }

    public stop(): void {
        this.gameState = false;

        this.score = 0;

        this.blackHits = 0;
        this.whiteHits = 0;

        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.updateScore(0);
        this.display.updateTime(30);
        this.display.updateAccuracy(0);
    }

    public onClick(clickedTile: Tile): void {
        if (clickedTile.color === "black") {
            this.blackHits++;
            this.totalBlackHits++;

            this.display.tileManager.redraw(clickedTile, { color: "limegreen" });

            const accuracy = this.blackHits / (this.blackHits + this.whiteHits);
            const time = (Date.now() - this.startTime) / 1000;

            this.score += Math.round((this.blackHits * accuracy) * (1 / time + 1));

            setTimeout(() => {
                this.display.tileManager.redraw(clickedTile, { color: "white" });
                this.display.updateScore(this.score);
                this.display.updateAccuracy((this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);

                this.blackHits = 0;
                this.whiteHits = 0;
                this.startTime = Date.now();

                const randomTile = this.display.tileManager.getRandomTile();
                randomTile.color = "black";
                this.display.tileManager.redraw(randomTile);

                clickedTile.color = "white";
            }, 60);
        } else if (clickedTile.color === "white") {
            this.whiteHits++;
            this.totalWhiteHits++;

            this.display.tileManager.redraw(clickedTile, { color: "crimson" });

            setTimeout(() => {
                this.display.tileManager.redraw(clickedTile, { color: "white" });
                this.display.updateAccuracy((this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);
            }, 60);
        }
    }
}