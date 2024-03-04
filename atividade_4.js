// Criar um programa que exiba o resultado das operações: (item 1)
// - soma (item 2)
// - subtração (item 3)
// - multiplicação (item 4)
// - radiciação (item 5)
// - fatorial (item 6)
// com o uso de objetos e métodos. (item 7)
// Para o cálculo do fatorial, procure usar métodos recursivos. (item 8)


class Calculator {
  constructor(number_1, number_2) {
    this.number_1 = number_1;
    this.number_2 = number_2;
  }

	/**
	 * Soma números (item 2)
	 */
  sum() {
    return this.number_1 + this.number_2;
  }

	/**
	 * Subtrai número (item 3)
	 */
  subtract() {
    return this.number_1 - this.number_2;
  }


	/**
	 * Multiplica números (item 4)
	 */
  multiply() {
    return this.number_1 * this.number_2;
  }

	/**
	 * Radiação de números
	 */
  radiate() {
    return Math.sqrt(this.number_1);
  }

	/**
	 * Fatorial dos números
	 */
  factorial() {
    if (this.number_1 === 0) {
      return 1;
    } else {
      return this.number_1 * (new Calculator(this.number_1 - 1, null)).factorial();
    }
  }
}

const number_1 = 20;
const number_2 = 9;
const calculator = new Calculator(number_1, number_2);

// (item 1)
console.log('Soma:', calculator.sum());
console.log('Subtração:', calculator.subtract());
console.log('Multiplicação:', calculator.multiply());
console.log('Radiação:', calculator.radiate());
console.log('Fatorial de', number_1, ':', calculator.factorial());
