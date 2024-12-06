import "core-js/stable";
import "regenerator-runtime/runtime";

class Person {
  sayName() {
    return 'name'
  }
}

const john = new Person();

console.log(john);

const promise = new Promise();

const isHas = [1,2,3].includes(2);
