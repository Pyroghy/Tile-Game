import { GameDisplay } from "../display/GameDisplay";

export abstract class Gamemode {
    public display: GameDisplay;
    public emit: any;

    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public constructor(dispatch: any) {
        this.display = new GameDisplay();
        this.emit = dispatch;
    }

    public get accuracy(): number {
        const totalHits = this.totalBlackHits + this.totalWhiteHits;
        return this.totalBlackHits / totalHits;
    }

    public abstract start(...args: any[]): void;
    public abstract stop(...args: any[]): void;
    public abstract restart(...args: any[]): void;
    public abstract onClick(...args: any[]): void;
}