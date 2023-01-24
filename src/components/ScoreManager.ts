export class ScoreManager {
    public clicks: number;
    public points: number;
    public time: number;

    public constructor() {
        this.clicks = 0;
        this.points = 0;
        this.time = 0;
    }

    public calculateAccuracy() {
        const accuracy = (this.points / this.clicks) * 100;
        return accuracy.toFixed(1);
    }

    public updateScore(increaseScore: boolean = false) {
        this.clicks++;
        
        if (increaseScore) {
            this.points++;
            const pts = document.getElementById("pts");
            pts.innerText = this.points.toString();

        }

        const acc = document.getElementById("acc");
        acc.innerText = this.calculateAccuracy().toString();
    }
}