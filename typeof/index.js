{
  const name = 'foo'
  const age = 22
  const friend = ['obama','trump']
  const profile = {
    name: name,
    age: age,
    friend: friend
  }

  // NOTE: function can be variable
  let prefix = function(name) {
    return console.log('hello '+name)
  }

  // NOTE: function can be parameter and function can be return
  let myFunc = function(func,name) {
    return function () {
      func(name)
    }
  }
  let result = myFunc(prefix,name)
  result()

  console.log(typeof myFunc)
  console.log(typeof name)
  console.log(typeof age)
  console.log(typeof friend)
  console.log(typeof profile)

  console.log(profile)
  console.log(profile.name)
  console.log(profile.age)
  console.log(profile.friend)


}

// cant be access const and let variable from out of bracket
