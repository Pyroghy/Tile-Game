export class Gamemode {
    public blackHits = 0;
    public whiteHits = 0;
    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public startTime: number;

    public get accuracy() {
        const totalHits = this.totalBlackHits + this.totalWhiteHits;
        return this.totalBlackHits / totalHits;
    }

    public increaseBlackHits() {
        this.blackHits++;
        this.totalBlackHits++;
    }

    public resetBlackHits() {
        this.blackHits = 0;
        this.totalBlackHits = 0;
    }

    public increaseWhiteHits() {
        this.whiteHits++;
        this.totalWhiteHits++;
    }

    public resetWhiteHits() {
        this.whiteHits = 0;
        this.totalWhiteHits = 0;
    }
}