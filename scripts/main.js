// console.log("Welcome to the main module")

// Lightning Round - Exercise 1 - Dog Breed

    // Functions can return a value that we can capture:

    // Write a function that takes a string of a dog breed as an argument (like 'border collie')
    // Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
    // Execute the function in a way that captures the returned value in a variable.
    // Console.log the string "When it comes to pets," plus the returned value of the function.

        // const functionThatTakesString = (dogBreed) => {
        //     if (dogBreed) {
        //         return `My favorite dog breed is ${dogBreed}`
        //     } else { 
        //         return `I like cats`
        //     }
        // }

        // const returnValueOfFunction = functionThatTakesString("Lab")
        // console.log(`When it comes to pets, ${returnValueOfFunction}`)


    //Lightning Round - Exercise 2 - 

    // let painter = {
    //     tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    //     uniform: "white overalls",
    //     cost_per_hour: 25.00,
    //     insured: true,
    //     cleanSurface: () => "cleans"
    //   }

    //   console.log(`Before she begins, the painter ${painter.cleanSurface()} the wall.`)

    // Lightning Round - Exercise 3 - Add Button

    let btn = document.querySelector(".funBtn")

    btn.addEventListener("click", ()=> {
        console.log("Congradulations! Your button is working!")
        const imgDiv = document.querySelector(".msgbox")
        imgDiv.innerHTML = `
        <img class="jonah" src="./images/excited.jpg" alt="excited Jonah">
        <p>Told ya!</p>
        `
    })

    let btn2 = document.querySelector(".wedBtn")

    btn2.addEventListener("click", ()=> {
        const imgDiv = document.querySelector(".imgContainer")
        imgDiv.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4x3qmxtqL7X0ZKutYMCMNnFc__dk7xt5aQQ&usqp=CAU">`
    })

    let btn3 = document.querySelector(".thursBtn")

    btn3.addEventListener("click", () => {
        const imgDiv = document.querySelector(".imgBox")
        imgDiv.innerHTML = `<img src="https://media0.giphy.com/media/ce280BjADCmsfgps4t/giphy.gif" alt="thursday img">`
    })

    // Lightning Round - Exercise 4 - Looping

//     let family = [
//         {
//           name: "Fred Jones",
//           age: 49,
//           title: "parent"
//         },
//         {
//           name: "Pat Jones",
//           age: 50,
//           title: "parent"
//         },
//         {
//           name: "Bubba Jones",
//           age: 20,
//           title: "adult child"
//         },
//         {
//           name: "Kelly Jones",
//           age: 12,
//           title: "dependent child"
//         },
//         {
//           name: "Bartleby",
//           age: 3,
//           title: "pet"
//         }
//       ]
    
   

// let familyArray = []

// for (const familyMember of family) {
//         familyArray.push(`<h3>${familyMember.name}</h3>`)
//     }
// console.log(familyArray)

// const contentElement = document.querySelector("#family")
// contentElement.innerHTML += familyArray.join("")

// const adults = family.filter((familyMember)=> {
//     if (familyMember.age > 18) {
//         return true
//     }

// })

// console.log("Grownups:", adults)

// const oneParent = family.find((familyMember) => familyMember.title === "parent")
// console.log(oneParent)

// //Find only returns the FIRST thing that makes 
// // what it's searching for true.

// Lightning Round - Exercise 5 - 

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
}

console.log("Our company's lawyer is", employee.name)
console.log("Jeff was hired on", employee["hire_date"])

//   employee.vaction_days = 20
employee["vaction_days"] = 20

let eom = "employee_of_the_month";

employee.eom = false
employee[eom] = false
console.log(employee)

let arrayOfNums = [1, 2, 3, 4, 5, 6]

function add(total, a) {
    return total + a
}

let sum = arrayOfNums.reduce(add, 0)

console.log ("sum", sum)

let sum2 = arrayOfNums.reduce(add, 0);
console.log("sum2", sum2)


// Warmup 1: Get Average
// Write a function that will accept any number of integer or 
// decimal arguments and return the average of those arguments.


function getAverage() {
    let array = Array.from(arguments)
    let sum = array.reduce(add, 0)
    let avg = sum/array.length
    console.log("avg", avg)
}

getAverage(1, 2, 3, 4, 5)
getAverage(0, 2)
getAverage(8, 6, 7, 5, 3, 0, 9)


