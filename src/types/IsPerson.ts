// This can be used with classes to say that if a class used this type then it must at some point use the 'format' method.

export interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    // Using the ? makes it optional
    spend?(a: number): number;
}
