// Dio Banking

import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount = new PeopleAccount(987, 'nami', 1234)
peopleAccount.deposit();

const companyAccount = new CompanyAccount('Toei', 4561)
console.log(companyAccount.deposit())
