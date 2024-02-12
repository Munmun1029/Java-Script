//------------------------------- Assignment 4 -------------------------------
function calculateMoney(ticketNumber) {
    let totalProfit = 0;
    if (0 <= ticketNumber) {
        totalProfit = (ticketNumber * 120) - (500 + (8 * 50));
    }
    else {
        console.log("Negative Ticket Number Not Allow. ")
    }
    return totalProfit;
}
// const total = calculateMoney(-10);
// console.log("Total profit " ,total);

function checkName(name) {

    if (typeof name !== 'string') {
        console.log("Enter string type name.");
    }
    let lastLetter = name[name.length - 1];
    if (lastLetter === 'A' || lastLetter === 'a'
        || lastLetter === 'Y' || lastLetter === 'y' || lastLetter === 'U'
        || lastLetter === 'u' || lastLetter === 'I' || lastLetter === 'i' || lastLetter === 'E'
        || lastLetter === 'e' || lastLetter === 'O' || lastLetter === 'o'
        || lastLetter === 'W' || lastLetter === 'w') {
        console.log("This is Good Name.");
    }
    else {
        console.log("This is Bad Name.");
    }
    return name;

}
// const Name = checkName("munmun");
// const Name =  checkName( "Farhana");
// const Name = checkName(567);

function deleteInvalid(array) {
    if (!Array.isArray(array)) {
        console.log("Invalid Array");
        return;
    }
    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// const Numbers = deleteInvalid([NaN,"mun",0,29,30,10,[5,17,1]]);
//const Numbers = deleteInvalid({array:[NaN,"mun",0,29,30,10,[5,17,1]]});
// console.log(Numbers);

function password(obj) {

    let pass = "";
    if (obj.name !== "" && obj.name !== undefined && obj.birthYear !== "" && obj.birthYear !== undefined
        && obj.siteName !== "" && obj.siteName !== undefined && obj.birthYear.toString().length === 4) {
        pass = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
    }
    else {
        console.log("Invalid input.Check Again.")
    }

    return pass;
}

// const createdPass = password({ name: "munmun", birthYear: 2000, siteName: "Google" })
// console.log(createdPass)

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) && !Number.isInteger(livingCost)) {
        console.log("Invalid Input.");
        return;
    }
    let totalIncome = 0;

    for (const Income of arr) {
        totalIncome = totalIncome + Income ;

    }
    const totalSavings = totalIncome - livingCost;
    if (totalSavings > 0) {
        console.log("Wow! You save this month ", totalSavings, "Dollar.")
    }
    else {
        if (totalSavings <= 0) {
            console.log("Earn more money.")
        }
    }
    return totalIncome;


}
// const money = monthlySavings([4500, 200, 1500, 1850], 5000);
// const money = monthlySavings(5000,[4500, 200, 1500, 1850]);
// console.log("Total monthly income is ", money);

