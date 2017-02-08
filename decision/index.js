// NOTE: true and false with any value
let _zero = 0
let _null = null
let _undefined
let _false = false
let _anyNumber = 1
let _anyString = 'string'
let _anyObj = { obj: false }

console.log(!!_zero) // false
console.log(!!_null) // false
console.log(!!_undefined) // false
console.log(!!_anyNumber) // true
console.log(!!_anyString) // true
console.log(!!_anyObj) // true

if(_zero) { // false
  console.log('condition is true, do if statement')
} else { // do else
  console.log('condition is false, do else statement')
}

let result = _undefined ? 'msg of if statement' : 'msg of else statement'
console.log(result) // msg of else statement

_null && console.log('msg of statement condition is false') // do not log anything
!_null && console.log('msg of statement condition is true') // do log
