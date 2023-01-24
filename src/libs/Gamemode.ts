import { TileManager } from "./TileManager";
import { TimedMode } from "./gamemodes/TimedMode";
import type { GameType } from "./types/Enums";
import type { GamemodeOptions } from "./types/Interfaces";

export class Gamemode extends TileManager {
    public type: GameType;

    public constructor(context: CanvasRenderingContext2D, options: GamemodeOptions) {
        super(context);
        this.type = options.type;
    }

    public startTimed() {
        const timedMode = new TimedMode(this.context);
    }

}