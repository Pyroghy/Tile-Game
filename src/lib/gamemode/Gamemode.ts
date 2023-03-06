import { GameDisplay } from "../display/GameDisplay";

export abstract class Gamemode {
    public display: GameDisplay;
    public emit: any;

    public gameTimer: ReturnType<typeof setInterval>;
    public startTime: number;

    public blackHits?: number;
    public whiteHits?: number;
    public totalBlackHits = 0;
    public totalWhiteHits = 0;

    public constructor() {
        this.display = new GameDisplay();
    }

    public get accuracy(): number {
        const totalHits = this.totalBlackHits + this.totalWhiteHits;
        return this.totalBlackHits / totalHits;
    }

    public setEmitter(dispatch: any) {
        this.emit = dispatch
    }

    public abstract start(...args: any[]): void;
    public abstract stop(...args: any[]): void;
    public abstract restart(...args: any[]): void;
    public abstract onClick(...args: any[]): void;
}