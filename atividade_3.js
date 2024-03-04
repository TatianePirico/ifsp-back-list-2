// 1) Utilizando o recurso de sobrecarga de métodos, crie um programa com uma Classe que contenha um método chamado “calculate( )”.
// 2) O comportamento deste método muda de acordo com o parâmetro informado:
// 3) - Retorna a área do círculo caso receba um valor do tipo double;
// 4) - Retorna a área do quadrado caso receba dois valores do tipo double;
// 5) - Retorna o perímetro de um triângulo caso receba três valores do tipo int;
// 6) - Retorna a área de um triângulo caso receba um valor do tipo int e outro valor do tipo double;
// 7) - Retorna a área de um triângulo caso receba 3 vetores com pares ordenados (coordenadas cartesianas x e y)
// 8) - Retorna o texto “Uso incorreto” caso receba uma cadeia de caracteres (string).

class Calculator {

  /**
   * Valida se dado corresponde ao tipo certo para calculo
   * 
   * @param number 
   * @returns boolena
   */
  validateCircle(number) {
    const isNumber = typeof number === 'number';
    const isDouble = !Number.isInteger(number);
    return isNumber && isDouble;
  }

  /**
   * Valida se dados correspondem ao tipo certo para calculo
   * 
   * @param {*} number_1 
   * @param {*} number_2 
   * @returns boolean
   */
  validateSquare(number_1, number_2) {
    const isNumber = typeof number_1 === 'number' && typeof number_2 === 'number';
    const isDouble = !Number.isInteger(number_1) && !Number.isInteger(number_2);
    return isNumber && isDouble;
  }

  /**
   * Valida se dados correspondem ao tipo certo para calculo
   * 
   * @param {*} number_1 
   * @param {*} number_2 
   * @param {*} number_3 
   * @returns boolean
   */
  validateTriangle(number_1, number_2, number_3) {
    const isNumber = typeof number_1 === 'number' && typeof number_2 === 'number' && typeof number_3 === 'number';
    const isInteger = Number.isInteger(number_1) && Number.isInteger(number_2) && Number.isInteger(number_3);
    return isNumber && isInteger;
  }

  /**
   * Valida se dados correspondem ao tipo certo para calculo
   * 
   * @param {*} number_1 
   * @param {*} number_2 
   * @returns boolean
   */
  validateTriangleIntAndDouble(number_1, number_2) {
    const isNumber = typeof number_1 === 'number' && typeof number_2 === 'number';
    const isDouble = !Number.isInteger(number_1) || !Number.isInteger(number_2);
    const isInteger = Number.isInteger(number_1) || Number.isInteger(number_2);

    return isNumber && isDouble && isInteger;
  }

  /**
   * 
   * @param args 
   * @returns 
   */
  calculate(...args) { // (item 1)
    const calculator = new Calculator();

    const isCircle = args.length === 1 && calculator.validateCircle(args[0]);
    const isSquare = args.length === 2 && calculator.validateSquare(args[0], args[1]);
    const isTriangle = args.length === 3 && calculator.validateTriangle(args[0], args[1], args[2]);
    const isTriangleBaseHeight = args.length === 2 && calculator.validateTriangleIntAndDouble(args[0], args[1]);
    const isTriangleCoordinates = args[0].length === 3 && Array.isArray(args[0][0]) && Array.isArray(args[0][1]) && Array.isArray(args[0][2]);
    const isString = typeof args[0] === 'string';
    
    // (item 2)
    if (isCircle) { // (item 3)
      const radius = args[0];
      return Math.PI * radius ** 2;
    } else if (isSquare) { //(item 4)
      const side_1 = args[0];
      const side_2 = args[1];
      return side_1 * side_2;
    } else if (isTriangle) { // (item 5)
      const side_1 = args[0];
      const side_2 = args[1];
      const side_3 = args[2];
      return side_1 + side_2 + side_3;
    } else if (isTriangleBaseHeight) { //(item 6)
      const base = args[0];
      const height = args[1];
      return (base * height) / 2;
    } else if (isTriangleCoordinates) { //(item 7)
      const [x1, y1] = args[0][0];
      const [x2, y2] = args[0][1];
      const [x3, y3] = args[0][2];
      const side_1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      const side_2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
      const side_3 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
      const semiperimetro = (side_1 + side_2 + side_3) / 2;
      return Math.sqrt(semiperimetro * (semiperimetro - side_1) * (semiperimetro - side_2) * (semiperimetro - side_3));
    } else if (isString) { // (item 8)
      return 'Uso incorreto';
    } else {
      return 'Dados inválidos';
    }
  }
}

const calculator = new Calculator();

console.log('Área do círculo:', calculator.calculate(5.2));
console.log('Área do quadrado:', calculator.calculate(3.2, 4.2)); 
console.log('Perímetro do triângulo:', calculator.calculate(2, 3, 4));
console.log('Área do triângulo (base e altura):', calculator.calculate(4, 5.8));
console.log('Área do triângulo (coordenadas):', calculator.calculate([[0, 0], [4, 0], [0, 3]]));
console.log('Uso incorreto:', calculator.calculate('Olá'));
console.log('Argumentos inválidos:', calculator.calculate(true, null));
