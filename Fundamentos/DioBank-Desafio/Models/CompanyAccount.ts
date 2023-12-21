import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getloan = (amountLoan: number): void => {
        console.log(`Empréstimo no valor de ${amountLoan} solicitado.`)
        this.deposit(amountLoan);
        console.log(`Empréstimo finalizado`)
    }
}