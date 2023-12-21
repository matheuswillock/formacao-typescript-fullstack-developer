import { DioAccount } from "./DioAccount";

export class AdminAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositPlus = (amountDeposit: number): void => {
        this.deposit(amountDeposit + 10)
    }
}