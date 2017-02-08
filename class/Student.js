import Person from './Person'

export default class Student extends Person {
  constructor(stdId, ...props) {
    super(...props),
    this.stdId = stdId
  }

  sayGoodMorning(){
    console.log(`good morning teacher
      my name is ${this.name}
      my stdId is ${this.stdId}`)
  }
}
