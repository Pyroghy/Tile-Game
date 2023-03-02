export class Gamemode {
    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public startTime: number;

    public emit: any;

    public constructor(dispatch: any) {
        this.emit = dispatch;
    }

    public get accuracy() {
        const totalHits = this.totalBlackHits + this.totalWhiteHits;
        return this.totalBlackHits / totalHits;
    }
}