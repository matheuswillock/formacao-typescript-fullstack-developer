import { AdminAccount } from './Models/AdminAccount'
import { CompanyAccount } from './Models/CompanyAccount'
import { PeopleAccount } from './Models/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(100)
const adminAccount: AdminAccount = new AdminAccount('Admin', 1000)
console.log(adminAccount)
adminAccount.depositPlus(100);