import { WeightedUnion } from "./WeightedUnion";

export class Graph extends WeightedUnion {
  private V: number;
  private E: number;
  private adj: Array<Array<number>>;

  constructor(V: number) {
    super(V * V);
    this.V = V;
    this.E = 0;
    this.adj = new Array<Array<number>>(V);
    this.adj.fill(new Array());
  }

  addEdge(v: number, w: number): void {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.E++;
  }

  adjList(v: number): Array<number> {
    return this.adj[v];
  }

  numOfVertices(): number {
    return this.V;
  }
}
