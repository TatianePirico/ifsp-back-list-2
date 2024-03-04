// 1) Criar um programa de cadastro de Clientes com nome, endereço, Cep e CPF. 
// 2) Utilizar os recursos de Classes e objetos. 
// 3) Encapsular todos os atributos para que possam ser alterados e lidos apenas utilizando métodos de acesso. 
// 4) Para cada cliente informado, exibir os dados na tela ao final da inserção de dados. 
// 5) Realizar a validação dos dados usando RegEX.

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
 * Class Client (item 2)
 */
class Client {
	constructor(name, address, zipCode, document){ // (itens 1, 2 e 3)
		this._name = name
		this._address = address
		this._zipCode = zipCode
		this._document = document
	}

	/**
	 * Valida nome do cliente (item 5)
	 * 
	 * @returns true/false
	 */
	validateName() {
		const regex = /^[a-zA-ZÀ-ú ]+$/;
		const validate = regex.test(this._name);

		if(!validate) {
			console.error('Nome inválido! Informe apenas letras.');
		}

		return validate;
	}

/**
	* Valida endereço do cliente (item 5)
	*
	* @returns true/false
	*/
	validateAddress() {
		const regex = /^(.+), ([0-9]+)$/;
		const validate = regex.test(this._address);

		if(!validate) {
			console.error('Endereço inválido! Infome no formato "Rua, numero" .');
		}

		return validate;
	}

	/**
	 * Valida cep do cliente (item 5)
	 * 
	 * @returns true/false
	 */
	validateZipCode() {
		const regex = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;
		const validate = regex.test(this._zipCode);

		if(!validate) {
			console.error('CEP inválido! Infome no formato 99.999-999" .');
		}

		return validate;
	}

	/**
	 * Valida cpf do cliente (item 5)
	 * 
	 * @returns true/false
	 */
	validateDocument() {
		const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
		const validate = regex.test(this._document);

		if(!validate) {
			console.error('CPF inválido! Infome no formato 999.999.999-99" .');
		}

		return validate;
	}

	/**
	 * Exibe cliente cadastrado (item 4)
	 */
	showClient() {
    console.log(`Nome: ${this._name}`);
    console.log(`Endereço: ${this._address}`);
    console.log(`CEP: ${this._zipCode}`);
    console.log(`CPF: ${this._document}`);
  }
}

/**
 * Coleta dado de cliente
 * 
 * @param message 
 * @returns number 
 */
function getData(message) {
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
	let name, address, zipCode, document;

	do {
			name = await getData("Informe o nome do cliente: ");			
	} while (!new Client(name).validateName());

	do {
		address = await getData("Informe o endereço do cliente: ");			
	} while (!new Client(name, address).validateAddress());

	do {
		zipCode = await getData("Informe o CEP do cliente: ");			
	} while (!new Client(name, address, zipCode).validateZipCode());

	do {
		document = await getData("Informe o CPF do cliente: ");			
	} while (!new Client(name, address, zipCode, document).validateDocument());

	console.log("************ Cadastro realizado com sucesso! ************");
	const client = new Client(name, address, zipCode, document);
	client.showClient();

	reader.close();
}

main();