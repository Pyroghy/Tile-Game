import { TileManager } from "../structures/TileManager";

export class PatternDisplay {
    public document: Document;

    private scoreText: HTMLElement;
    private roundText: HTMLElement;
    private accuracyText: HTMLElement;

    public tileManager: TileManager;

    public constructor(document: Document) {
        this.document = document;

        this.scoreText = document.getElementById("score");
        this.roundText = document.getElementById("round");
        this.accuracyText = document.getElementById("accuracy");
    }

    public createCanvas() {
        const canvas = this.document.getElementById("canvas") as HTMLCanvasElement;

        canvas.width = canvas.clientWidth !== canvas.width ? canvas.clientWidth : canvas.width;
        canvas.height = canvas.width;

        const context = canvas.getContext("2d");

        this.tileManager = new TileManager(context, { width: 640, rows: 4 });
    }

    public updateScore(score: number): void {
        this.scoreText.innerText = score.toString();
    }

    public updateRound(round: number): void {
        this.roundText.innerText = round.toString();
    }

    public updateAccuracy(accuracy: number): void {
        this.accuracyText.innerText = `${accuracy.toFixed(2)}%`;
    }
}