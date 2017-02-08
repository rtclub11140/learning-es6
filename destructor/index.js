const person = {
  name: 'foo',
  age: 23,
  address: 'BKK Thailand',
  status: 'single'
}

const { name, age, address, status } = person

console.log(name)
console.log(age)
console.log(address)
console.log(status)

// NOTE: can destructor in parameter section
let describeSomethings = ({ name, age, address, status}) => {
  console.log('name :',name)
  console.log('age :',age)
  console.log('address :',address)
  console.log('status :',status)
}

describeSomethings(person)

// NOTE: if key and value object as a same word suchas {name: name} will reduce to { name }
const allNewPerson = {
  name,
  age,
  address,
  tel: 1212312121
}

console.log(allNewPerson);
