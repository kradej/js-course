export class Square {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  field(): number {
    return this.side * this.side;
  }
}
