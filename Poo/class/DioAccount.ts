export abstract class DioAccount {
  private name: string;
  readonly accountNumber: number;
  balance: number = 0;
  status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    if(this.validateStatus()) return console.log("Voce depositou");
  }

  withdraw = () => {
    console.log("Voce sacou");
  }

  getValue = () => {
    console.log(this.balance);
  }

  setName = (newName: string): void => {
    this.name = newName;
  }

  getname = (): string => {
    return this.name;
  }

  private validateStatus = (): boolean => {
    if(this.status){
      return this.status
    }

    throw new Error('Conta inválida');
  }
}