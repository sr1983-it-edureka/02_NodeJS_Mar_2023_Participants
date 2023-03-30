
const mutipleTypes = require("../sample-modules/03-multiple-types");

console.log(mutipleTypes);

const BankAccount = mutipleTypes.BankAccount;
const john = new BankAccount();
console.log(john);

const CreditCardAccount = mutipleTypes.CreditCardAccount;
const sweta = new CreditCardAccount();
console.log(sweta);

const rajesh = new mutipleTypes.MutualFundAccount();
console.log(rajesh);