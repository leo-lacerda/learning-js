let now = new Date()
let weekday = now.getDay()

switch (weekday) {
  case 0:
    console.log("Today is Sunday!")
    break
  case 1:
    console.log("Today is Monday!")
    break
  case 2:
    console.log("Today is Tuesday!")
    break
  case 3:
    console.log("Today is Wednesday!")
    break
  case 4:
    console.log("Today is Thursday!")
    break
  case 5:
    console.log("Today is Friday!")
    break
  case 6:
    console.log("Today is Saturday!")
    break
  default:
    console.log("I don't even when today is!")
}
