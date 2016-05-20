        //Implement the following Java class in JavaScript.
        //
        //public class Account{
        //	private double balance;
        //	public Account(double balance){
        //		this.balance = balance;
        //	}
        //	public void deposit(double amount){
        //		balance += amount;
        //	}
        //	public void withdraw(double amount){
        //		balance -= amount;
        //	}
        //	public double getBalance(){
        //		return balance;
        //	}
        //}
        //Account a1 = new Account(10000);
        //a1.deposit(100);
        //a1.withdraw(1000);
        //System.out.println(a1.getBalance());

        function Account(mBalance){
            var balance = mBalance;
            balance = mBalance;
    deposit = function(amount){
    balance +=amount;
                console.log(amount +" deposited. The Balance is "+ balance);
            }
            this.withdraw = function(amount){
    balance -= amount;
                console.log(amount +" withdrawn The Balance is "+ balance);

            }
            this.returnBalance = function(){
                return this.balance;

            }
        }
        var a1 = new Account(10000);
        a1.deposit(100);
        a1.withdraw(300);
        console.log("The Balance is "+ a1.returnBalance());