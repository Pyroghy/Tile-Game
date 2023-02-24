import { Display } from "./Display";

export class GameDisplay extends Display {
    // client functions
    public setClientName(username: string) {
        this.setPlayerName("client", username);
    }

    public setClientHealth(health: number) {
        this.setPlayerHealth("client", health);
    }

    // target functions
    public setTargetName(username: string) {
        this.setPlayerName("target", username);
    }

    public setTargetHealth(health: number) {
        this.setPlayerHealth("target", health);
    }
}