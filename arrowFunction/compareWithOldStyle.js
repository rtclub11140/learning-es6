// NOTE: arrow function can access this reference of upper level
// old style
let person = {
  name: 'foo',
  age: 22,
  friends: ['adam', 'thomas', 'mike'],
  helloMyFriend: function () {
    let _this = this
    this.friends.forEach(function(friend){
      // this.name in this function scope will return undefined
      console.log(_this.name +' said: Hi '+friend)
    })
  }
}
// arrow function style
let person2 = {
  name: 'bar',
  age: 23,
  friends: ['danny', 'william', 'john'],
  helloMyFriend: function () {
    let _this = this
    this.friends.forEach((friend) => { // use arrow function
      // this.name in this function scope will return bar
      console.log(this.name +' said: Hi '+friend)
    })
  }
}

person.helloMyFriend()
person2.helloMyFriend()
