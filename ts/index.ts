import {Calculator} from "./calculator/calculator";
import {Game} from "./game/game";
import {User} from "./game/user";

// Calculator
const calculator = new Calculator();

console.log('5 + 3 = ' + calculator.add(5, 3));
console.log('5 - 3 = ' + calculator.subtract(5, 3));
console.log('5 * 3 = ' + calculator.multiplication(5, 3));
console.log('5 / 3 = ' + calculator.div(5, 3));
console.log('Last result: ' + calculator.getLastResult());
// Game
const game = new Game(1000);
game.addUser(new User('User1'));
game.addUser(new User('User2'));
game.addUser(new User('User3'));
game.addUser(new User('User4'));

game.startGame();
game.printScores();
