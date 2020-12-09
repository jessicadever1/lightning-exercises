// Functions can return a value that we can capture:

// Write a function that takes a string of a dog breed as an argument (like 'border collie')

// Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
// Execute the function in a way that captures the returned value in a variable.
// Console.log the string "When it comes to pets," plus the returned value of the function.

const functionThatTakesString = (dogBreed) => {
    if (dogBreed) {
        return `My favorite dog breed is ${dogBreed}`
    } else { 
        return `I like cats`
    }
}

// const returnValueOfFunction = functionThatTakesString("Lab")
const returnValueOfFunction =  functionThatTakesString();

console.log(`When it comes to pets, ${returnValueOfFunction}`)