import { GameDisplay } from "../display/GameDisplay";

export class PatternMode {
    public display = new GameDisplay();

    public startTime: number;
    public round = 0;

    public blackHits = 0;
    public whiteHits = 0;
    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public resetRound() {
        this.blackHits = 0;
        this.whiteHits = 0;
        this.startTime = Date.now();
    }

    public start(): void {
        this.display.tileContext.createMatrix(4);
        this.display.tileContext.redrawTiles();

        this.startTime = Date.now();
    }

    public restart(): void {
        throw new Error("Method not implemented.");
    }

    public stop(): void {
        this.display.score = 0;

        this.blackHits = 0;
        this.whiteHits = 0;
        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.update("score", 0);
        this.display.update("counter", 30);
        this.display.update("accuracy", 0);
    }

    public onClick(clickedTile: any, callback: any): void {
        if (clickedTile.color === "black") {
            this.blackHits++;
            this.totalBlackHits++;

            this.display.tileContext.redraw(clickedTile, { color: "limegreen" });
            clickedTile.color = "green";

            setTimeout(() => {
                this.display.tileContext.redraw(clickedTile, { color: "white" });
                this.display.update("accuracy", (this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);

                if (this.blackHits === 4) {
                    const totalHits = this.blackHits + this.whiteHits;
                    const accuracy = this.blackHits / totalHits;
                    const time = (Date.now() - this.startTime) / 1000;

                    this.display.score += Math.round((this.blackHits * accuracy) * (1 / time + 1));

                    setTimeout(() => {
                        this.blackHits = 0;
                        this.whiteHits = 0;
                        this.round++;

                        if (this.round >= 20) {
                            callback();
                        }

                        this.display.update("score", this.display.score);
                        this.display.update("counter", this.round);

                        this.display.tileContext.createMatrix(4);
                        this.display.tileContext.redrawTiles();
                        this.startTime = Date.now();
                    }, 60);
                }
            }, 60);
        } else {
            this.whiteHits++;
            this.totalWhiteHits++;
            this.display.tileContext.redraw(clickedTile, { color: "crimson" });

            setTimeout(() => {
                this.display.tileContext.redraw(clickedTile, { color: "white" });
                this.display.update("accuracy", (this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);
            }, 60);
        }
    }

}