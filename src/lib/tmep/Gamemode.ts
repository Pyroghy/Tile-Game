import type { Tile } from "../structures/Tile";
import type { BaseDisplay } from "./BaseDisplay";

export abstract class Gamemode {
    public display: BaseDisplay;
    public gameState: boolean;

    public abstract start(): void;
    public abstract restart(): void;
    public abstract stop(): void;
    public abstract onClick(clickedTile: Tile): void;
}