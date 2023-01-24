import { TileManager } from "./TileManager";
import { ScoreManager } from "./ScoreManager";

export abstract class Gamemode extends TileManager {
    public scoreBoard: ScoreManager = new ScoreManager();
    public abstract start(...args: any[]): void;
    public abstract stop(...args: any[]): void;
    public abstract onClick(...args: any[]): void;
}