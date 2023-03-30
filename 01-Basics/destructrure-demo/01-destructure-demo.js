
const moduleRef = 
require("../module-usages/sample-modules/03-multiple-types");

// 1st Way
const CreditCard = moduleRef.CreditCardAccount;

const ccAccount1 = new CreditCard();

// 2nd Way

const ccAccount2 = new moduleRef.CreditCardAccount;


