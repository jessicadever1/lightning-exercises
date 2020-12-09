let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]



let familyArray = []

for (const familyMember of family) {
  familyArray.push(`<h3>${familyMember.name}</h3>`)
}
console.log(familyArray)

const contentElement = document.querySelector("#family")
contentElement.innerHTML += familyArray.join("")

const adults = family.filter((familyMember)=> {
if (familyMember.age > 18) {
  return true
}

})

console.log("Grownups:", adults)

const oneParent = family.find((familyMember) => familyMember.title === "parent")
console.log(oneParent)

//Find only returns the FIRST thing that makes 
// what it's searching for true.