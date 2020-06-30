import { Graph } from "./Graph";
import { Stack } from "./Stack";

export class GS {
  private marked: Array<boolean>;
  private pred: Array<number>;
  private p: Array<number>;
  private vistedVertices: Array<number>;
  private e: number;

  private s: number;

  public constructor(g: Graph, s: number, e: number) {
    this.s = s;
    this.pred = new Array<number>(g.numOfVertices());
    this.marked = new Array<boolean>(g.numOfVertices());
    this.p = new Array<number>();
    this.vistedVertices = new Array<number>();
    this.e = e;
    this.gs(g, s);
  }

  public gs(g: Graph, v: number): void {
    this.marked[v] = true;
    this.vistedVertices.push(v);
    let adj = [...g.adjList(v)];
    adj.sort(function (a, b) {
      return b - a;
    });
    adj.forEach((element: number) => {
      if (!this.marked[element]) {
        this.pred[element] = v;
        this.gs(g, element);
      }
    });

    /*
    g.adjList(v).forEach((element: number) => {
      if (!this.marked[element]) {
        this.pred[element] = v;

        this.gs(g, element);
      }
      
    });
    */
  }

  public path(v: number): Stack {
    let path: Stack = new Stack();
    for (let x = v; x !== this.s; x = this.pred[x]) {
      path.push(x);
    }
    path.push(this.s);

    for (let i = 0; i < path.size(); i++) {
      this.p.push(path.get(i));
    }
    return path;
  }

  public getPath(cb: (num: number) => void): Array<number> {
    const arr: Array<number> = new Array<number>();
    let j = this.p.length - 1;
    this.p.forEach((element) => {
      arr.push(this.p[j--]);
      //cb(this.p[j--]);
    });

    return arr;
  }

  public getVistedVertices(): Array<number> {
    return this.vistedVertices;
  }
}
