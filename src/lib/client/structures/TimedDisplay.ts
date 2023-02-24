export class TimedDisplay {
    public document: Document;
    private scoreText: HTMLElement;
    private timeText: HTMLElement;
    private accuracyText: HTMLElement;

    public constructor(document: Document) {
        this.document = document;
        this.scoreText = document.getElementById("score");
        this.timeText = document.getElementById("time");
        this.accuracyText = document.getElementById("accuracy");
    }

    public updateScore(score: number): void {
        this.scoreText.innerText = score.toString();
    }

    public updateTime(time: number): void {
        this.timeText.innerText = time.toString();
    }

    public updateAccuracy(accuracy: number): void {
        this.accuracyText.innerText = `${accuracy.toFixed(2)}%`;
    }
}