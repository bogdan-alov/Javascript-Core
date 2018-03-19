let PaymentProcessor = require('./payment-processor')


const generalPayments = new PaymentProcessor();


const emptyProc = generalPayments.toString();



console.log(emptyProc)