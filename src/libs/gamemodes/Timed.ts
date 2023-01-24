import { Gamemode } from "../Gamemode";
import { GameType } from "../types/Enums";

// svelte files here instead? idk

export class Timed extends Gamemode {
    private time: number = 30;

    public constructor(context: any) {
        super(context, GameType.TIMED);
    }

    public start() { 
        const tileMatrixLength = this.tileMatrix.length;

        for (let i = 1; i < rows; i++) {
            let index = Math.floor(Math.random() * tileMatrixLength);

            while (this.tileMatrix[index].color === "black") {
                index = Math.floor(Math.random() * tileMatrixLength);
            }

            this.tileMatrix[index].color = "black";
        }

        this.drawTileMatrix();
    }
}

const gamemodeOptions = {
    type: GameType.TIMED,
    rows: 4
}