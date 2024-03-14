let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

// Use a while loop to iterate through the newInventoryCarModels array to get see car's data type. 
// Remember to initialize your i variable to 0 before starting the loop! Print out each car type in a console.log statement.
// Make a new variable called typeS1Count and initialize it to 0. Inside your loop from step 2, check and see if the car type is equal to "S1". If it is, increment the typeS1Count variable by one. Outside the loop, log "Number of S1 Cars is:" and then the value of the typeS1Count variable. Hint: You will need to make an if statment inside your loop!
// Stop and check: Run your code and see what prints out. It should be counting three "S1" cars, so you should see a console.log statement printing "Number of S1 Cars is: 3".
// Perhaps you've just learned that "T1" and "S1" types are nearly identical. Try changing the original array and change the "T1" types to "S1" and run the code again. Does it now print "Number of S1 Cars is: 4"?
// Write another loop but this time use a for loop. Remember, we are just using the loops to iterate through an array. We can use either type and accomplish the same objective.
// Outside of this second loop, make a variable called lorrieCount. Create an if statement inside of your for loop that checks if the Car Model is "Lorrie". After the loop is closed, print out how many lorries you found.
// Stop and check: Did you get three "Lorries"?
let typeS1count = 0
let i=0

while (i < newInventoryCarModels.length) {
    if (typeof(newInventoryCarModels[i]) === `S1`) {
        typeS1count++
    }
    i++
}

console.log(`Tu abuela esta loca`)