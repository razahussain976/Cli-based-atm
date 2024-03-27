#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let mypin = 3214;

let pinAnswer = await inquirer.prompt([{
name: "pinNum",
message:"Enter your pin number",
type: "number"
}])

if(pinAnswer.pinNum === mypin){
console.log("Correct pin code!");
let operations = await inquirer.prompt([{
    name: "operation",
    message: "Please select one operation",
    type: "list",
    choices:["withdraw", "checkbalance", "Fastcash"]

}]);
console.log(operations);

if(operations.operation === "withdraw"){
    let amountAns = await inquirer.prompt([{
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }]);    

    if(amountAns.amount <= myBalance){
myBalance -= amountAns.amount;
    console.log(`Congratulation! your transaction is successfully completed.\nYour remaining balance is ${myBalance}.`)
    }
    else {
        console.log(`Invalid balance! your current balance is ${myBalance}.`)
    }}
    else if(operations.operation === "checkbalance"){
        console.log(`Your balance is ${myBalance}.`);
    }
    else if(operations.operation === "Fastcash"){
        let fastCashAmount = await inquirer.prompt([{
            name: "fastamount",
            message: "Please select amount!",
            type: "list",
            choices: ["2500", "5000","7500"]
        }])
        myBalance -= fastCashAmount.fastamount;
        console.log(`Congratulation! your transaction is successfully completed.\nYour remaining balance is ${myBalance}`)
    }
}

else{
    console.log("Incorrect pin code");
}