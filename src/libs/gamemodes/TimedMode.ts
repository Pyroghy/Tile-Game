import { Gamemode } from "../Gamemode";
import { GameType } from "../types/Enums";

export class TimedMode extends Gamemode {
    public constructor(context: CanvasRenderingContext2D) {
        super(context, { type: GameType.TIMED });
    }

    public start() { }

    public handleClick() { }
}