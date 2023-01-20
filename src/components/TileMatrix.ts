export class TileMatrix {
    public width: number;
    public height: number;
    public length: number;
    public tileMatrix: any[];

    public constructor(width: number, height: number, length: number) {
        this.width = width;
        this.height = height;
        this.length = length;
        this.tileMatrix = [];
    }

    public create() {
        let tileSize = Math.floor((this.width / this.length) * 0.98);
        let padding = Math.floor(
            (this.width - tileSize * this.length) / (this.length + 1)
        );

        let paddingAdjustment = Math.abs(
            (this.width -
                (tileSize * this.length + padding * (this.length + 1))) /
            2
        );

        let getPadding = (e: any) =>
            (tileSize + padding) * e + padding + paddingAdjustment;

    }

}