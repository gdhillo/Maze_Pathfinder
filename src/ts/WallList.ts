export class WallList {
  private c1: number;
  private c2: number;

  constructor(c1: number, c2: number) {
    //this.setWall(c1, c2);
    this.c1 = c1;
    this.c2 = c2;
  }

  setWall(c1: number, c2: number): void {
    this.c1 = c1;
    this.c2 = c2;
  }

  getC1(): number {
    return this.c1;
  }

  getC2(): number {
    return this.c2;
  }

  toString(): string {
    return `( ${this.c1} , ${this.c2} )`;
  }
}
