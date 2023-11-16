export class User {
  name: string;
  currentPosition: number;

  constructor(name: string) {
    this.name = name;
    this.currentPosition = 0;
  }
  move(fieldsToMove: number): void {
    this.currentPosition = this.currentPosition + fieldsToMove;
  }

  getScore(): string {
    return this.name + ' - ' + this.currentPosition;
  }

}
