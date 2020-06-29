import { Graph } from "./Graph";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class BFS {
  private marked: Array<boolean>;
  private pred: Array<number>;
  private p: Array<number>;
  private vistedVertices: Array<Array<number>>;
  private q: Queue;
  private e: number;
  private s: number;

  public constructor(g: Graph, s: number, e: number) {
    this.s = s;
    this.pred = new Array<number>(g.numOfVertices());
    this.marked = new Array<boolean>(g.numOfVertices());
    this.marked.fill(false);
    this.p = new Array<number>();
    this.vistedVertices = new Array<Array<number>>();
    this.q = new Queue();
    this.e = e;
    this.bfs(g, s);
  }

  public bfs(g: Graph, v: number) {
    this.q.enqueue(v);
    this.marked[v] = true;

    while (this.q.length() !== 0) {
      const vertex = this.q.dequeue();

      this.vistedVertices.push(g.adjList(vertex));
      if (vertex === this.e) {
        return;
      }

      g.adjList(vertex).forEach((element: number) => {
        if (this.marked[element] !== true) {
          this.marked[element] = true;
          this.pred[element] = vertex;
          //this.vistedVertices[vertex].push(this.pred[element]);
          this.q.enqueue(element);
        }
      });
    }
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

  public getVistedVertices(): Array<Array<number>> {
    return this.vistedVertices;
  }
}
