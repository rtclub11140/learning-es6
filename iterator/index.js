const persons = [
  {
    name: 'foo',
    age: 22
  },
  {
    name: 'bar',
    age: 23
  },
  {
    name: 'john',
    age: 24
  },
  {
    name: 'doe',
    age: 25
  }
]

// NOTE: foreach not return anything
let forEachResult = persons.forEach((p,index)=>console.log(index,p))
console.log(forEachResult)

// NOTE: map will return array
let mapResult = persons.map((p,index)=> p.name)
console.log(mapResult)

// NOTE: filter will return array of index that return true
let filterResult = persons.filter((p,index)=> p.age > 23)
console.log(filterResult)
