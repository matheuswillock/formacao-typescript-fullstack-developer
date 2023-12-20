export abstract class DioAccount {
	private name: string;
	private readonly accountNumber: number;
	private balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name,
		this.accountNumber = accountNumber
	}

	deposit = (amount: number): void => {
		if (this.validateStatus()) {
			this.balance += amount;
			console.log(`Voce depositou R$${amount}\nSaldo atual R$${this.getBalance()}`)
			
		}
	}

	getName = (): string => {
		return this.name;
	}

	getAccountNumber = (): number => {
		return this.accountNumber;
	}

	withdraw = (amount: number): void => {
		let balance = this.getBalance();

		if (amount <= balance && this.validateStatus()) {
			this.balance -= amount;
			console.log(`Voce sacou ${amount}.\nSaldo atual R$${balance}`)
		}

		console.log(`Valor indisponível para saque.\nSaldo R$${balance}`)		
	}

	getBalance = (): number => {
		return this.balance;
	}

	showInfo = (): void => {
		console.log();
	}

	private validateStatus = (): boolean => {
		if (this.status) {
			return this.status
		}

		throw new Error('Conta inválida')
	}



}