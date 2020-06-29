import { WeightedUnion } from "./WeightedUnion";

export class Graph extends WeightedUnion {
  private V: number;
  private E: number;
  private adj: Array<Array<any>>;

  public constructor(V: number) {
    super(V * V);
    this.V = V;
    this.E = 0;
    this.adj = new Array<Array<any>>(V);

    for (let i = 0; i < this.adj.length; i++) {
      this.adj[i] = new Array<number>();
    }
    // this.adj.fill(new Array<number>());
  }

  public addEdge(v: number, w: number): void {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.E++;
    //console.log(`${v} , ${w}`);
    //console.log(this.adj[v]);
  }

  public setAdjList(otherAdj: Array<Array<number>>): void {
    this.adj = otherAdj;
  }

  public adjList(v: number): Array<number> {
    return this.adj[v];
  }

  public adj_(): Array<Array<number>> {
    return this.adj;
  }

  public numOfVertices(): number {
    return this.V;
  }
}
