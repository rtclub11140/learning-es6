// NOTE: run this file by babel-register preset-es2015 and stage-0

// NOTE: import module from 3rd party
// old style or nodeJS style
const fs = require('fs')
// es6 style
import http from 'http'

// NOTE: import module from local
// select once
const module1 = require('./module1')
// const { name, age } = require('./module1');
// import { name, age } from './module1'

console.log(module1)
// console.log(name)

// select once
const module2 = require('./module2')
// import SayFunction, { address, name } from './module2'
// import * as module2 from './module2'

console.log(module2)
