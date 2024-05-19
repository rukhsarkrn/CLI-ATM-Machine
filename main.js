#! /usr/bin/env node
console.log("----ATM MACHINE----");
import inquirer from "inquirer";
let myAccountBalance = 15000;
let myPincode = 2424;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "Enter your 4 digit pincode",
        type: "number" }
]);
if (pinAnswer.pin !== myPincode) {
    console.log("Incorrect pincode");
}
else if (pinAnswer.pin === myPincode) {
    console.log("Correct PinCode");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "select any operator to perform action",
            type: "list",
            choices: ["CheckBalance", "Withdraw", "fastcash"] }
    ]);
    {
        console.log(operationAns);
    }
    ;
    //      TEMPLATE LITERALS ,( BALANCE CHECK)
    if (operationAns.operation === "CheckBalance") {
        console.log(`Your Account Balance Is: ${myAccountBalance}`);
    } //TEMPLATE LITERAL
    //       (WITHDRAW)
    else if (operationAns.operation === "Withdraw") {
        console.log("next step");
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "select your amount",
                type: "number" }
        ]);
        //      TEMPLATE LITERALS, (GREATER THEN,LESS THEN)
        if (myAccountBalance >= amountAns.amount) {
            let remainingBalance = myAccountBalance - amountAns.amount;
            console.log("Withdraw succesfully\n");
            console.log(`your remaining balance is: ${remainingBalance}`);
        } //TEMPLATE LITERAL
        else if (amountAns.amount >= myAccountBalance) {
            console.log("Sorry You have insufficient balance");
        }
        ;
    }
    //         (FASTCASH)
    if (operationAns.operation === "fastcash") {
        let fastCash = await inquirer.prompt([
            { name: "fast",
                message: "select the amount which you withdraw",
                type: "list",
                choices: [3000, 8000, 12000, 15000] }
        ]);
        if (myAccountBalance >= fastCash.fast) {
            let RemainingBalance = myAccountBalance - fastCash.fast;
            console.log("Withdraw succesfully\n");
            console.log(`your remaining balance is: ${RemainingBalance}`);
        } //TEMPLATE LITERALS
        else {
            console.log("Sorry You have insufficient balance");
        }
    }
}
