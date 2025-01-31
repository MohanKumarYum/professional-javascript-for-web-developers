// Classes are first-class citizens in JavaScript, meaning they can be passed around as you would any other object or function reference:

// Classes may be defined anywhere a function would, such as inside an array:
let classList = [
  class {
    constructor(id) {
      this.id_ = id;
      console.log(`instance ${this.id_}`);
    }
  }
];

function createInstance(classDefinition, id) {
  return new classDefinition(id);
}

let foo = createInstance(classList[0], 3141);  // instance 3141 
ClassPassingExample01.js
