import type { PatternDisplay } from "../client/structures/PatternDisplay";
import type { Tile } from "../structures/Tile";
import { Gamemode } from "./Gamemode";

export class PatternMode extends Gamemode {
    public display: PatternDisplay;

    public startTime: number;
    public gameState = false;

    public score = 0;
    public round = 0;

    public blackHits = 0;
    public whiteHits = 0;

    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public start(): void {
        console.log("START");
    }

    public restart(): void {
        console.log("RESTART");
    }

    public stop(): void {
        console.log("STOP");
    }

    public onClick(clickedTile: Tile): void {
        if (clickedTile.color === "black") {
            this.blackHits++;
            this.totalBlackHits++;

            this.display.tileManager.redraw(clickedTile, { color: "limegreen" });
            clickedTile.color = "green";

            setTimeout(() => {
                this.display.tileManager.redraw(clickedTile, { color: "white" });
                this.display.updateAccuracy((this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);

                if (this.blackHits === 4) {
                    const totalHits = this.blackHits + this.whiteHits;
                    const accuracy = this.blackHits / totalHits;
                    const time = (Date.now() - this.startTime) / 1000;

                    this.score += Math.round((this.blackHits * accuracy) * (1 / time + 1));

                    setTimeout(() => {
                        this.blackHits = 0;
                        this.whiteHits = 0;
                        this.round++;

                        this.display.updateScore(this.score);
                        this.display.updateRound(this.round);

                        this.display.tileManager.createMatrix(4);
                        this.display.tileManager.redrawTiles();
                        this.startTime = Date.now();
                    }, 60);
                }
            }, 60);
        } else {
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