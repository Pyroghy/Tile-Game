import { GameDisplay } from "../display/GameDisplay";

export class TimedMode {
    public display = new GameDisplay();

    public startTime: number;

    public blackHits = 0;
    public whiteHits = 0;
    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public setGameTimer(gameLength: number, onGameEnd: Function) {
        const timer = setInterval(() => {
            gameLength--;

            this.display.update("counter", gameLength);

            if (gameLength <= 0) {
                this.stop(onGameEnd);
                clearInterval(timer);
            }
        }, 1000);
    }

    public resetRound() {
        this.blackHits = 0;
        this.whiteHits = 0;
        this.startTime = Date.now();
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

        this.blackHits = 0;
        this.whiteHits = 0;
        this.totalBlackHits = 0;
        this.totalWhiteHits = 0;

        this.display.update("score", 0);
        this.display.update("counter", 30);
        this.display.update("accuracy", 0);
    }

    public onClick(clickedTile: any): void {
        if (clickedTile.color === "black") {
            this.blackHits++;
            this.totalBlackHits++;

            this.display.tileContext.redraw(clickedTile, { color: "limegreen" });

            const accuracy = this.blackHits / (this.blackHits + this.whiteHits);
            const time = (Date.now() - this.startTime) / 1000;

            this.display.score += Math.round((this.blackHits * accuracy) * (1 / time + 1));

            setTimeout(() => {
                this.display.tileContext.redraw(clickedTile, { color: "white" });
                this.display.update("score", this.display.score);
                this.display.update("accuracy", (this.totalBlackHits / (this.totalBlackHits + this.totalWhiteHits)) * 100);

                this.resetRound();

                const randomTile = this.display.tileContext.getRandomTile();
                randomTile.color = "black";
                this.display.tileContext.redraw(randomTile);

                clickedTile.color = "white";
            }, 60);
        } else if (clickedTile.color === "white") {
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