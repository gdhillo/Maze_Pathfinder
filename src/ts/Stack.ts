export class Stack {
  private stack: Array<any>;
  public constructor() {
    this.stack = new Array<any>();
  }

  // push function
  public push(element: any): void {
    // push element into the items
    this.stack.push(element);
  }

  // pop function
  public pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.stack.length === 0) return "Underflow";
    return this.stack.pop();
  }

  // peek function
  public peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.stack[this.stack.length - 1];
  }

  // get function
  public get(i: number) {
    return this.stack[i];
  }

  // isEmpty function
  public isEmpty() {
    // return true if stack is empty
    return this.stack.length === 0;
  }

  public size() {
    return this.stack.length;
  }
}
