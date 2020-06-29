export class Queue {
  private items: Array<any>;
  public constructor() {
    this.items = [];
  }

  public enqueue(element: any) {
    this.items.push(element);
  }

  public dequeue() {
    if (this.isEmpty()) return "Underflow";

    return this.items.shift();
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public length() {
    return this.items.length;
  }
}
