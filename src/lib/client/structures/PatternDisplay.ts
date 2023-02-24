export class PatternDisplay {
    private scoreText: HTMLElement;
    private roundText: HTMLElement;
    private accuracyText: HTMLElement;

    public constructor(document: Document) {
        this.scoreText = document.getElementById("score");
        this.roundText = document.getElementById("round");
        this.accuracyText = document.getElementById("accuracy");
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