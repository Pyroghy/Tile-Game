import { TileManager } from "./wip/TileManager";


export class Gamemode {

    public constructor(type: any) {

    }
}

// const game = new Game({ gamemode: GameType.TIMED });
export class Game extends TileManager {
    public gamemode: Gamemode;
    public playing: boolean;

    public constructor(context: CanvasRenderingContext2D, options: any) {
        super(context, { width: 640, rows: 4 });
        this.gamemode = new Gamemode(options.type);
    }

    public start() {
    }

    public stop() {
    }
}