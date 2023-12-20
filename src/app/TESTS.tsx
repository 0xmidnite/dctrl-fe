// Importing interface created in the 'interfaces' folder.
import { IsPerson } from "../types/IsPerson"

// Interfaces 
// These allow you to enforce a certain type of structure within classes or objects. The thing mentioned below are the requirements to create a class/object with a type of 'IsPerson'. Without these values being provided, this type cannot be used.

// Below the interface IsPerson is commented out because it has been recreated in the interfaces folder to be imported here and implemented.

// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   // Using the ? makes it optional
//   spend?(a: number): number;     
// }

// This constant needs to provide all the values within the interface to be able to declare itself with the type 'IsPerson'
const me: IsPerson = {
    name: 'Guillermo',
    age: 24,
    // Here we create the "speak" method required
    speak(text: string): void {
      console.log(text)
    },
    spend(amount: number): number {
      console.log("I spend", amount)
      return amount
    }
  };
  
  // Whenever this variable is used, it will requiere the thing mentioned in the interface.
  let someone: IsPerson;
  
  // This arrow function below would take in something called 'person' which to be accepted in the fist place, it needs to be of type 'IsPerson'
  const greetPerson = (person: IsPerson) => {
    console.log('Hello', person.name)
  }
  
  // 'me' is of type 'IsPerson'
  greetPerson(me)
  
  console.log(me)