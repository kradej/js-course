export class Calculator {
  private memory: number | null = null;

  getLastResult(): number | null {
    return this.memory;
  }
  add(number1: number, number2: number): number {
    return this.memory = number1 + number2;
  }

  multiplication(number1: number, number2: number): number {
    return this.memory = number1 * number2;
  }

  subtract(number1: number, number2: number): number {
    return this.memory = number1 - number2;
  }

  div(number1: number, number2: number): number {
    return this.memory = number1 / number2;
  }
}
