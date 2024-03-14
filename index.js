let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]


// Write another loop but this time use a for loop. Remember, we are just using the loops to iterate through an array. 
// We can use either type and accomplish the same objective.
// Outside of this second loop, make a variable called lorrieCount. Create an if statement inside of your for loop that checks if the Car Model is "Lorrie". After the loop is closed, print out how many lorries you found.
// Stop and check: Did you get three "Lorries"?

// let typeS1count = 0
// let i=0

// while (i < newInventoryCarModels.length) {
//     if (typeof(newInventoryCarModels[i]) === `S1`) {
//         typeS1count++
//     }
//     i++
// }

// console.log(`Tu abuela esta loca ${typeS1count}`)

let typeS1count = 0 

for (let i=0; i < newInventoryCarTypes.length; i++ ) {
    if (newInventoryCarTypes[i] === `Lorrie`){
        typeS1count++
    }
}

console.log(`The position of Lorrie is: ${typeS1count}`)