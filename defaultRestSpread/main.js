// NOTE: can assign default value of parameter
const saySomething = (word = 'nothing to say') => {
  console.log(word)
}
saySomething()
saySomething('I have a pen, I have an apple')

// NOTE: rest is combine other parameter to an array
const showMeYourCar = (name, ...cars) => {
  console.log(`my name is ${name}, i have many cars `)
  cars.forEach((car,index)=>console.log(index+1,car))
}
showMeYourCar('foo','volvo','benz','bwm','jaguar')

// NOTE: spread can extract your object or array
const cars = ['volvo','benz','bwm','jaguar']
console.log(...cars)

// NOTE: spread can help you to merge object
const person = {
  fname: 'foo',
  lname: 'bar',
  tel: 123456790
}
const personCont = {
  tel: 987654321,
  address: 'BKK Thailand'
}
let mergeResult = {...person,...personCont}
console.log(mergeResult)
