import { Client } from "./structures/Client";
import { PatternMode } from "../structures/PatternMode";

// handles client side server events
export const client = new Client(3000);

client.socket.on("roomConnect", (username: string) => {
    client.display.setClientName(username);
    client.display.setClientHealth(100);
});

client.socket.on("roomDisconnect", () => {
    client.display.setClientName("USERNAME");
    client.display.setClientHealth(100);

    client.display.setTargetName("USERNAME");
    client.display.setTargetHealth(100);
});

client.socket.on("gameStart", (code: string, users: any) => {
    client.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    client.context = client.canvas.getContext("2d");
    client.gamemode = new PatternMode(client.context, { width: 640, rows: 4 });
    client.room = {
        code: code,
        players: {
            target: users.filter((user: any) => user.id !== client.socket.id)[0],
            client: users.filter((user: any) => user.id === client.socket.id)[0]
        }
    };

    client.display.setTargetName(client.room.players.target.name);
    client.display.setTargetHealth(100);
    client.setGameState("ON");
});

client.socket.on("gameEnd", (code: string, winner: string) => {
    client.setGameState("OFF", winner);
});

client.socket.on("updatePlayerHealth", (health: number) => {
    client.display.setClientHealth(health);
});