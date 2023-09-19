class ATM {
  constructor() {
    this.accountBalances = {
      123456789: 1000000,
    };
    this.pinAttempts = 3;
    this.poweredOn = false;
  }

  powerOn() {
    this.poweredOn = true;
    console.log("ATM powered on.");
  }

  powerOff() {
    this.poweredOn = false;
    console.log("ATM powered off.");
  }

  validatePin(customerID, pin) {
    const correctPin = "1234";

    if (this.pinAttempts > 0 && pin === correctPin) {
      return true;
    } else {
      console.log("Incorrect PIN or PIN attempts exhausted.");
      this.pinAttempts--;
      return false;
    }
  }

  withdrawCash(customerID, amount) {
    if (this.poweredOn && this.validatePin(customerID, pin)) {
      if (amount % 50000 === 0) {
        if (this.accountBalances[customerID] >= amount) {
          this.accountBalances[customerID] -= amount;
          console.log(
            `Successful withdrawal. You can take $${amount} from the main tray.`
          );
        } else {
          console.log("Insufficient balance.");
        }
      } else {
        console.log("Amount must be in multiples of $50000.");
      }
    } else {
      console.log("ATM is powered off or PIN validation failed.");
    }
  }

  depositMoney(customerID, amount, type) {
    if (this.poweredOn && this.validatePin(customerID, pin)) {
      if (type === "cash" || type === "check") {
        this.accountBalances[customerID] += amount;
        console.log(`Successful deposit of $${amount} in ${type}.`);
      } else {
        console.log('Invalid deposit type. Use "cash" or "check".');
      }
    } else {
      console.log("ATM is powered off or PIN validation failed.");
    }
  }

  transferMoney(customerID, sourceAccount, targetAccount, amount) {
    if (this.poweredOn && this.validatePin(customerID, pin)) {
      if (this.accountBalances[sourceAccount] >= amount) {
        this.accountBalances[sourceAccount] -= amount;
        this.accountBalances[targetAccount] += amount;
        console.log(
          `Successful transfer of $${amount} from ${sourceAccount} to ${targetAccount}.`
        );
      } else {
        console.log("Insufficient balance in the source account.");
      }
    } else {
      console.log("ATM is powered off or PIN validation failed.");
    }
  }

  checkBalance(customerID) {
    if (this.poweredOn && this.validatePin(customerID, pin)) {
      const balance = this.accountBalances[customerID];
      console.log(`Available balance in your account: $${balance}.`);
    } else {
      console.log("ATM is powered off or PIN validation failed.");
    }
  }
}

const atm = new ATM();
atm.powerOn();
const customerID = "123456789";
const pin = "1234";

atm.withdrawCash(customerID, 100000);
atm.depositMoney(customerID, 50000, "cash");
atm.transferMoney(customerID, "123456789", "987654321", 200000);
atm.checkBalance(customerID);
atm.powerOff();
