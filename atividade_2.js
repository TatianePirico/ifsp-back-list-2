// 1) Criar um programa com Classes e Objetos que tenha um método chamado "contaPrimos( )".
// 2) Este método recebe como parâmetro dois números inteiros positivos, sendo o primeiro menor do que o segundo.
// 3) O retorno do método será a quantidade de números primos encontrados do primeiro ao segundo valor informado.
// Ex: ("obj" é um objeto qualquer a escolha do aluno)
// x = obj.contaPrimos(5, 20) → x terá o valor 6, já que de 5 até 20 existem seis números primo.

/**
 * Importação do modulo
 */
const readline = require('readline');

/**
 * Criação de interface
 */
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/**
 * Class Client
 */
class Number {

	constructor(number) {
		this._number = number;
	}

	/**
	 * Valida se número é primo
	 * 
	 * @returns true / false
	 */
	isPrime() {
    if (this._number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(this._number); i++) {
      if (this._number % i === 0) {
        return false;
      }
    }
    return true;
  }

	/**
	 * Conta números primos em um intervalo de números (item 1)
	 * 
	 * @param start 
	 * @param end 
	 * @returns true / false
	 */
  countPrime(start, end) { //Recebe dois parametros (item 2)
    let count = 0;

    for (let i = start; i <= end; i++) {
      const number = new Number(i);
      if (number.isPrime()) {
        count++;
      }
    }
    
		return count; //Retorna total de números primos em um intervalo (item 3)
  }

	/**
	 * Valida número
	 * 
	 * @returns true/false
	 */
	validateNumber() {
		const regex = /^\d+$/;
		const validate = regex.test(this._number);

		if(!validate) {
			console.error('Número inválido! Digite apenas números.');
		}

		return validate;
	}
}

/**
 * Coleta dado de cliente
 * 
 * @param message 
 * @returns number 
 */
function getNumber(message) {
	return new Promise((resolve) => {
			reader.question(message, (data) => {
					resolve(data);
			});
	});
}

/**
 * Inicio do programa
 */
async function main() {
	let number_1, number_2;

	do {
		number_1 = await getNumber("Informe o primeiro número: ");			
	} while (!new Number(number_1).validateNumber());

	do {
		number_2 = await getNumber("Informe o segundo número: ");			
	} while (!new Number(number_2).validateNumber());

	if (number_1 > number_2) { //valida se primeiro numero é menor que o segundo (item 2)
		console.log('');
		console.log("O primeiro número não pode ser maior que o segundo!");
		console.log('');
		main();
	} else {
		const number = new Number(5);
		const totalPrime = number.countPrime(5, 20);
		console.log(`Quantidade de primos entre ${number_1} e ${number_2}: ${totalPrime}`); 
		reader.close();
	}
}

main();