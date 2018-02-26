class Surgeon {
  constructor(name,department){
    this._name=name;
    this._department=department;
    this._behavior=0;
  }

  get name(){
    console.log(`The name is ${this._name}`)
    this._behavior++;
    return this._name;
  }
}

var restaurant ={
  name: 'Italian',
  seatingCapacity:120,
  hasDineInSpecial: true,
  entrees:['Penne alla Bolognese','Chicken'],
  openRestaurant(){
    if(this.hasDineInSpecial){
      return 'Yes!'
    } else {
      return 'No!'
    }
  }
}

var myObj={
  name:'Miti',
  sayHello() {
    return `${this.name} says hello!`;
  }
}

var yourObj={
  name:'Timer'
}

var person ={
  _name:'youngji',
  _age: 137,

  get age(){
    console.log(`age is ${this._age}`);
    return this._age
  }

}

class Animal {
  constructor(name) {
    this._name=name;
    this._behavior="fdsfsd";
  }
  get name(){
    return this._name;
  }
  get behavior(){
    return this._behavior;
  }
}
class Lion extends Animal{
  constructor(name,behavior){
    super(name,behavior)
  }
}
