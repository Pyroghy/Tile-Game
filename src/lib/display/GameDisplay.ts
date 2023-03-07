import type { Tile } from "../structures/Tile";
import { TileManager } from "../structures/TileManager";

export class GameDisplay {
    public tiles: TileManager;
    public score = 0;

    public setCanvas(canvas: HTMLCanvasElement): void {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.width;
        this.tiles = new TileManager(canvas);
    }

    public updateTile(tile: Tile, color: string): void {
        tile.color = color;
        this.tiles.update(tile);
    }

    public update(id: string, value: number): void {
        const element = document.getElementById(id);
        element.innerText = value.toString();
    }

    public increaseScore(points: number): void {
        this.score += points;
        this.update("score", this.score);
    }

    public decreaseScore(points: number): void {
        const score = this.score - points;
        this.score = score <= 0 ? 0 : score;
        this.update("score", this.score);
    }
}
