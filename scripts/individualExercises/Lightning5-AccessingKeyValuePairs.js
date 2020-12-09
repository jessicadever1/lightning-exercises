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