
import { about } from './about.js';
import fetchData from './home.js'

class Person {
  sayName() {
    return 'name'
  }
}

const john = new Person();


const promise = new Promise();

const isHas = [1, 2, 3].includes(2);

fetchData();

console.log( about, john, promise, isHas);
