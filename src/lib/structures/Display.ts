export class Display {
    public document: Document;

    public constructor(document: Document) {
        this.document = document;
    }

    public setPlayerName(player: string, username: string): void {
        const playerName = this.document.getElementById(`${player}-name`);
        playerName.innerText = username;
    }

    public setPlayerHealth(player: string, health: number): void {
        const playerHealth = this.document.getElementById(`${player}-health`);
        playerHealth.innerText = `${health}/100`;
    }

    public getPlayerName(player: string): string {
        const playerName = this.document.getElementById(`${player}-name`);
        return playerName.innerText;
    }

    public getPlayerHealth(player: string): number {
        const playerHealth = this.document.getElementById(`${player}-health`);
        return parseInt(playerHealth.innerText.split("/")[0]);
    }
}