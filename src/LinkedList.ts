import ListNode from './ListNode';

export default class LinkedList {
  public head: ListNode;

  constructor() {
    this.head = null;
  }

  public toString(): string {
    return [...this].map((item) => item.value).join(' -> ');
  }

  public add(value: any): void {
    const last = this.getLast();
    const node = new ListNode(value);
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
    node.next = this.head;
  }

  public unique(): void {
    const uniqueValues: any[] = [];
    [...this].forEach((node) => {
      if (uniqueValues[node.value]) {
        this.delete(node.value);
      };
      uniqueValues[node.value] = true;
    });
  }

  public delete(value: any): void {
    const prevNode = [...this].find((item) => item.next.value === value);
    if (prevNode) {
      if ([...this].length === 1) {
        this.head = null;
        return;
      } else if (prevNode.next === this.head) {
        this.head = this.head.next;
      }
      prevNode.next = prevNode.next.next;
    }
  }

  public find(value: any): ListNode {
    return [...this].find((item) => item.value === value);
  }

  public has(value: any): boolean {
    return [...this].some((node) => node.value === value);
  }

  public isEmpty(): boolean {
    return !this.head;
  }

  public getLast(): ListNode {
    return [...this].find((item) => item.next === this.head);
  }

  public clear(): void {
    this.head = null;
  }

  [Symbol.iterator] = function*() {
    if (this.isEmpty()) {
      return;
    }
    var current = this.head;
    do {
      yield current;
      current = current.next;
    } while (current !== this.head);
  };
}
