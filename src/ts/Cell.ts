export class Cell {
  private row: number;
  private col: number;
  private walls: Array<boolean>;
  private visted: boolean;

  public constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    //           top,  right, bottom, left
    this.walls = [true, true, true, true];
    this.visted = false;
  }

  public setVisted(): void {
    this.visted = true;
  }

  public takeDownWallUp(): void {
    this.walls[0] = false;
  }

  public takeDownWallRight(): void {
    this.walls[1] = false;
  }

  public takeDownWallDown(): void {
    this.walls[2] = false;
  }

  public takeDownWallLeft(): void {
    this.walls[3] = false;
  }

  public getWalls(): Array<boolean> {
    return this.walls;
  }

  public getRow(): number {
    return this.row;
  }

  public getCol(): number {
    return this.col;
  }

  public getVisted(): boolean {
    return this.visted;
  }
}
