import { TileManager } from "./TileManager.test";

export abstract class Gamemode extends TileManager {
    public abstract start(...args: any[]): void;
    public abstract stop(...args: any[]): void;
    public abstract onClick(...args: any[]): void;
}