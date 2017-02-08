// NOTE: callback style
const sayHello = (name,callback) => {
  setTimeout(()=> {
    callback(`my name is ${name}`)
  }, 2000)
}

const sayAge = (prevMsgm,callback) => {
  setTimeout(()=> {
    callback(prevMsgm,'i am 7 yeas old ')
  }, 2000)
}

// NOTE: callback hell
sayHello('foo bar', function (msg) {
  sayAge(msg,function (prevMsg,ageMsg) {
    console.log(prevMsg)
    console.log(ageMsg)
  })
})

// NOTE: promise style
const _sayHello = (name) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(`my name is ${name}`)
    }, 2000)
  })
}

const _sayAge = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(`i am 7 yeas old`)
    }, 2000)
  })
}

let tmp
_sayHello()
  .then(msg => {
    tmp = msg
    return _sayAge()
  })
  .then(msg => {
    console.log(tmp)
    console.log(msg)
  })
  .catch(err => console.log(err))
