export class WeightedUnion {
  private parent: Array<number>;

  public constructor(N: number) {
    this.parent = new Array(N);
    this.parent.fill(-1);
  }

  public find(n: number): number {
    let p: number;

    while ((p = this.parent[n]) !== -1) {
      n = p;
    }

    return n;
  }

  public pcfind(n: number): number {
    if (this.parent[n] < 0) {
      return n;
    }

    this.parent[n] = this.pcfind(this.parent[n]);

    return this.parent[n];
  }

  public union(a: number, b: number): void {
    let root1: number = this.find(a);
    let root2: number = this.find(b);

    if (root1 !== root2) {
      this.parent[root2] = root1;
    }
  }

  public wunion(a: number, b: number): void {
    let root1: number = this.pcfind(a);
    let root2: number = this.pcfind(b);

    if (root1 !== root2) {
      if (this.parent[root2] < this.parent[root1]) {
        this.parent[root2] += this.parent[root1];
        this.parent[root1] = root2;
      } else {
        this.parent[root1] += this.parent[root2];
        this.parent[root2] = root1;
      }
    }
  }

  public connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }

  public printArray(): void {
    this.parent.forEach((element) => console.log(element));
  }

  public getParentArray(): Array<number> {
    return this.parent;
  }
}
