// (() => {
//   type Gender = 'M'|'F';
//   class Person {
//     public name: string;
//     public gender: Gender;
//     public birthdate: Date;
    
//     constructor(name: string, gender: Gender, birthdate: Date){
//       this.name = name;
//       this.gender = gender;
//       this.birthdate = birthdate;
//     }
//   }

//   const newPerson = new Person('Dario','M', new Date('1985-10-21'));
//   console.log({newPerson})
// })();

// o lo mismo, pero más simple es:

(() => {
  type Gender = 'M'|'F';
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ){}
  }

  const newPerson = new Person('Dario','M', new Date('1985-10-21'));
  console.log({newPerson})
})();