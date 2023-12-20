import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getloan = (amountLoan: number): void => {
        console.log(`Empr�stimo no valor de ${amountLoan} solicitado.`)
        this.deposit(amountLoan);
        console.log(`Empr�stimo finalizado`)
    }
}