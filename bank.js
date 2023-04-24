class Bank {
    constructor(balance, accountName, accountNumber) {
      this.balance = balance;
      this.accountName = accountName;
      this.accountNumber = accountNumber;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`${amount} deposited successfully. Current account balance is ${this.balance}`);
    }
  
    withdraw(amount) {
      if (this.balance < amount) {
        console.log(`Insufficient funds. Current account balance is ${this.balance}`);
        return;
      }
      this.balance -= amount;
      console.log(`${amount} withdrawn successfully. Current account balance is ${this.balance}`);
    }
  
    checkBalance() {
      console.log(`Account Name: ${this.accountName}`);
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Current balance is ${this.balance}`);
    }
  }
  
  const BANK = new KAKBank(100000, "BANK", "150000");
  BANK.checkBalance(); 
  BANK.deposit(56500); 
  BANK.withdraw(2200); 
  BANK.checkBalance(); 
  BANK.withdraw(150000); 