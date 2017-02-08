// NOTE: arrow function with one argument
// focus on argument list
const func1_1 = num => num * 10

const func1_2 = num => (
  num * 10
)

const func1_3 = num => {
  return num * 10
}

const func1_4 = (num) => num * 10

const func1_5 = (num) => (
  num * 10
)

const func1_6 = (num) => {
  return num * 10
}

// NOTE: arrow function with multiple argument
// focus on argument list
const func2_1 = (num1, num2) => num1 * num2

const func2_2 = (num1, num2) => (
  num1 * num2
)

const func2_3 = (num1, num2) => {
  return num1 * num2
}

// NOTE: arrow function with one statement
// focus on after => symbol
const func3_1 = (num1) => num1 * 10

const func3_2 = (num1) => (
  num1 * 10
)

const func3_3 = (num1) => {
  return num1 * 10
}

// NOTE: arrow function with multiple statement
// focus on after => symbol
const func4_1 = (num1) => {
  num1 += 10
  num1 *= 10
  return num1
}
