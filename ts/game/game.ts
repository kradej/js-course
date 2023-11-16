import {User} from "./user";

export class Game {
  private users: User[] = [];
  private rounds: number;

  constructor(rounds: number) {
    this.rounds = rounds;
  }

  addUser(user: User): void {
    this.users.push(user);
  }


  startGame(): void {
    console.log('Game started');

    for (let i = 0; i < this.rounds; i++) {
      this.oneRound();
    }

    console.log('Game ended');
  }

  printScores(): void {
    console.log('Scores: ');

    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      console.log(user.getScore());
    }
  }

  private shuffle(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
  private userRound(user: User): void {
    user.move(this.shuffle());
  }

  private oneRound(): void {
    for (let i = 0; i < this.users.length; i++) {
      this.userRound(this.users[i]);
    }
  }
}
