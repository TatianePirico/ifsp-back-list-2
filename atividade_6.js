// Adaptar o exercício de validação de CPF da lista 01 em um formato Orientado a Objetos e incluindo validação por RegEX


/**
 * Importação do modulo
 */
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

class Validator {
  constructor(cpf) {
    this.cpf = cpf.replace(/[^0-9]/g, '');
  }

  validar() {
		// Verifica se o CPF tem 11 dígitos
    if (this.cpf.length !== 11) {
			return false;
		}

		// Verifica se todos os dígitos são iguais
		if (this.cpf === this.cpf.charAt(0).repeat(11)) {
				return false;
		}

		// Cálculo do primeiro dígito verificador
		let soma = 0;
		for (let i = 0; i < 9; i++) {
				soma += (10 - i) * this.cpf.charAt(i);
		}

		let primeiroDigito = soma % 11;
		primeiroDigito = primeiroDigito < 2 ? 0 : 11 - primeiroDigito;

		// Cálculo do segundo dígito verificador
		soma = 0;
		for (let i = 0; i < 10; i++) {
				soma += (11 - i) * this.cpf.charAt(i);
		}

		let segundoDigito = soma % 11;
		segundoDigito = segundoDigito < 2 ? 0 : 11 - segundoDigito;

		// Retorna se os dígitos verificadores coincidem
		return this.cpf.charAt(9) === String(primeiroDigito) && this.cpf.charAt(10) === String(segundoDigito);
	}
}

/**
 * Coleta CPF para análise
 * 
 * @param data 
 * @returns number 
 */
function getDocument(data) {
	return new Promise((resolve) => {
			readline.question(data, (value) => {
					resolve(value);
			});
	});
}

/**
 * Inicio do programa
 */
async function main() {
	const document = await getDocument("Informe seu CPF: ");

	const validator = new Validator(document);
	const isValid = validator.validar() ? 'é' : 'não é';
	console.log(`O CPF ${document} ${isValid} válido`);

	readline.close();
}

main();
