const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }

 function createTransaction (transaction){
    user.transactions.push(transaction);
    if(transaction.type =="credit"){
        user.balance += transaction.value
    } if (transaction.type =="debit"){
        user.balance -= transaction.value
    }
  }

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance)


function getHigherTransactionByType(CreditDebit){
   
    let higherTransaction;
    let higherValue = 0;
    
    for (let i of user.transactions) {
        if (i.type == CreditDebit && i.value > higherValue) {
            higherValue = i.value
            higherTransaction = i
        }
    } 
    return higherTransaction
}

console.log(getHigherTransactionByType('credit')) 
console.log(getHigherTransactionByType('debit')) 

function getAverageTransactionValue(){
    let sum =0

    for (i of user.transactions){
        sum = sum + i.value
    }
    
    return sum/user.transactions.length
}

console.log(getAverageTransactionValue())

function getTransactionCount(){
    let count = {credit: 0, debit: 0}

    for(i of user.transactions){
        if (i.type =='credit'){
            count.credit++
        } if (i.type =='debit'){
            count.debit++
        }
    } return count
}

console.log(getTransactionCount())