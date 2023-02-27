import type { Tile } from "../structures/Tile";
import { TileManager } from "../structures/TileManager";

export abstract class Gamemode {
    public abstract start(): void;
    public abstract restart(): void;
    public abstract stop(): void;
    public abstract onClick(clickedTile: Tile): void;
}