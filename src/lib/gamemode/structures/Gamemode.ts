import type { Tile } from "../../structures/Tile";
import { TileManager } from "../../structures/TileManager";

export abstract class Gamemode {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public tileManager: TileManager;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.tileManager = new TileManager(this.context, { width: this.canvas.width, rows: 4 });
    }

    public abstract start(): void;
    public abstract restart(): void;
    public abstract stop(): void;
    public abstract onClick(clickedTile: Tile): void;
}