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