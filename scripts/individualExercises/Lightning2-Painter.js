let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    cleanSurface: () => "cleans"
  }

  console.log(`Before she begins, the painter ${painter.cleanSurface()} the wall.`)