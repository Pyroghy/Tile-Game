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
        let seconds = 5;

        const baseX = Math.floor(this.canvas.width / 8);
        const baseY = Math.floor(this.canvas.width / 4);
        const baseW = Math.floor(this.canvas.width / 1.33);
        const baseH = Math.floor(this.canvas.width / 2);

        this.context.clearRect(baseX, baseY, baseW, baseH);
        this.context.fillStyle = "#212121";
        this.context.fillRect(baseX, baseY, baseW, baseH);

        this.context.fillStyle = "white";
        this.context.font = "32px Segoe UI";
        this.context.textAlign = "center";
        this.context.fillText(`Match Starts In ${seconds} Seconds`, baseH, baseH);

        const countdown = setInterval(() => {
            seconds--;

            if (seconds > 0) {
                this.context.clearRect(baseX, baseY, baseW, baseH);
                this.context.fillStyle = "#212121";
                this.context.fillRect(baseX, baseY, baseW, baseH);

                this.context.fillStyle = "white";
                this.context.font = "32px Segoe UI";
                this.context.textAlign = "center";
                this.context.fillText(`Match Starts In ${seconds} Seconds`, baseH, baseH);
            } else if (seconds <= 0) {
                this.tileManager.createMatrix(4);
                this.tileManager.redrawTiles();

                this.startTime = Date.now();
                this.gameState = true;

                clearInterval(countdown);
            }
        }, 1000);
    }

    public restart(): void {
        this.gameState = false;

        this.score = 0;
        this.round = 0;

        this.blackHits = 0;
        this.whiteHits = 0;

        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.updateScore(0);
        this.display.updateRound(0);
        this.display.updateAccuracy(0);

        let seconds = 3;

        const baseX = Math.floor(this.canvas.width / 8);
        const baseY = Math.floor(this.canvas.width / 4);
        const baseW = Math.floor(this.canvas.width / 1.33);
        const baseH = Math.floor(this.canvas.width / 2);

        this.context.clearRect(baseX, baseY, baseW, baseH);
        this.context.fillStyle = "#212121";
        this.context.fillRect(baseX, baseY, baseW, baseH);

        this.context.fillStyle = "white";
        this.context.font = "32px Segoe UI";
        this.context.textAlign = "center";
        this.context.fillText(`Match Starts In ${seconds} Seconds`, baseH, baseH);

        const countdown = setInterval(() => {
            seconds--;

            if (seconds > 0) {
                this.context.clearRect(baseX, baseY, baseW, baseH);
                this.context.fillStyle = "#212121";
                this.context.fillRect(baseX, baseY, baseW, baseH);

                this.context.fillStyle = "white";
                this.context.font = "32px Segoe UI";
                this.context.textAlign = "center";
                this.context.fillText(`Match Starts In ${seconds} Seconds`, baseH, baseH);
            } else if (seconds <= 0) {
                this.tileManager.createMatrix(4);
                this.tileManager.redrawTiles();

                this.startTime = Date.now();
                this.gameState = true;

                clearInterval(countdown);
            }
        }, 1000);
    }

    public stop(): void {
        const baseX = Math.floor(this.canvas.width / 8);
        const baseY = Math.floor(this.canvas.width / 4);
        const baseW = Math.floor(this.canvas.width / 1.33);
        const baseH = Math.floor(this.canvas.width / 2);

        this.context.fillStyle = "#212121";
        this.context.fillRect(baseX, baseY, baseW, baseH);

        this.context.fillStyle = "white";
        this.context.font = "32px Segoe UI";
        this.context.textAlign = "center";
        this.context.fillText("Match Has Ended!", baseH, 240);

        this.context.fillStyle = "blue";
        this.context.fillRect(200, 390, 100, 50);

        this.context.fillStyle = "black";
        this.context.font = "16px Segoe UI";
        this.context.textAlign = "center";
        this.context.fillText("Restart", baseH, 420);

        this.context.fillStyle = "red";
        this.context.fillRect(baseH, 390, 100, 50);

        this.context.fillStyle = "black";
        this.context.font = "16px Segoe UI";
        this.context.textAlign = "center";
        this.context.fillText("Leave", baseH, 420);

        this.gameState = false;

        this.score = 0;
        this.round = 0;

        this.blackHits = 0;
        this.whiteHits = 0;

        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.updateScore(0);
        this.display.updateRound(0);
        this.display.updateAccuracy(0);
    }

    public onClick(clickedTile: Tile): void {
        if (clickedTile.color === "black") {
            this.blackHits++;
            this.totalBlackHits++;

            this.tileManager.redraw(clickedTile, { color: "limegreen" });
            clickedTile.color = "green";

            setTimeout(() => {
                this.tileManager.redraw(clickedTile, { color: "white" });
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

                        if (this.round === 20) {
                            this.stop();
                            return;
                        }

                        this.tileManager.createMatrix(4);
                        this.tileManager.redrawTiles();
                        this.startTime = Date.now();
                    }, 60);
                }
            }, 60);
        } else {
            this.whiteHits++;
            this.totalWhiteHits++;
            this.tileManager.redraw(clickedTile, { color: "crimson" });

            setTimeout(() => {
                this.tileManager.redraw(clickedTile, { color: "white" });
                this.display.updateAccuracy((this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);
            }, 60);
        }
    }
}