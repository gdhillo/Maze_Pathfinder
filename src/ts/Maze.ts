import { Graph } from "./Graph";
import { WallList } from "./WallList";
import { WeightedUnion } from "./WeightedUnion";

export class Maze extends WeightedUnion {
  private N: number;
  private list: Array<WallList>;
  private numOfWalls: number;
  private graph: Graph;

  constructor(N: number) {
    super(N * N);
    this.N = N;
    this.numOfWalls = N * (N - 1) * 2;
    this.list = new Array<WallList>(this.numOfWalls);
    this.graph = new Graph(N * N);
  }

  makingList(): void {
    let c1: number = 0;
    let c2: number = 0;
    let i: number = 0;

    for (c1 = 0; c1 < this.N * this.N - 1; c1++) {
      c2 = c1 + 1;
      if (c2 % this.N != 0) {
        this.list[i++] = new WallList(c1, c2);
      }

      c2 = c1 + this.N;
      if (c2 < this.N * this.N) {
        this.list[i++] = new WallList(c1, c2);
      }
    }
  }

  randomizationList(): void {
    let r: number;
    let temp1, temp2: number;

    for (let i = 0; i < this.numOfWalls; i++) {
      r = Math.floor(Math.random() * this.numOfWalls);

      temp1 = this.list[i].getC1();
      temp2 = this.list[i].getC2();
      this.list[i].setWall(this.list[r].getC1(), this.list[r].getC2());
      this.list[r].setWall(temp1, temp2);
    }
  }

  generateMaze(cb?: () => void): void {
    for (let j = 0; j < this.numOfWalls; j++) {
      if (
        this.pcfind(this.list[j].getC1()) ==
          this.pcfind(this.list[j].getC2()) &&
        this.pcfind(this.list[j].getC1()) >= 0 &&
        this.pcfind(this.list[j].getC2()) >= 0
      ) {
        //System.out.println(list[j].toString() + " - Up");
        // Wall is Up
      } else {
        this.wunion(this.list[j].getC1(), this.list[j].getC2());
        this.graph.addEdge(this.list[j].getC1(), this.list[j].getC2());
        //System.out.println(list[j].toString() + " - Down");
        // Wall is Down
      }
    }
  }
}
