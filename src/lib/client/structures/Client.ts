import { Manager } from "socket.io-client";
import { GameDisplay } from "../../structures/GameDisplay";

export class Client extends Manager {
    public display = new GameDisplay(document);
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public gamemode: any;

    public room: any;
    public socket: any;
    public gameState = false;

    public constructor(port: number) {
        super(`http://localhost:${port}/`);
        this.socket = super.socket("/");
    }

    public setGameState(state: string, winner?: string) {
        console.log("state")

        switch (state) {
            case "ON":

                this.gamemode.start();
                this.gameState = true;

                break;
            case "OFF":

                this.gamemode.stop(winner);
                this.gameState = false;

                break;
            default:
                break;
        }
    }

    public updateTargetHealth(health: number) {
        this.display.setTargetHealth(health);
        this.socket.emit("updateTargetHealth", this.room.code, health, this.room.players.client.name);
    }
}