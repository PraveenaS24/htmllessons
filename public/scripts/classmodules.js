class Pizza {
    // instance property
  #slices = 10 //private field/private field
    // constructor
  constructor (toppings = [], customer) {
    // computer instance property - global fields of pizza
    this.toppings = toppings
    this.customer = customer
  }
   // static property - Array of strings
   static extraToppings = ['pepperoni', 'cheese'];
   //  static method
  static sayThanyou () {
    console.log('ThankYou!!!')
  }
  //non static method (instance method)
  eat () {
    console.log(this.toppings)
    console.log(this.#slices)
  }

  
  // Getter Property
  get length () {
    return this.#slices
  }

  set length (value) {
    this.#slices = value
  }
}
const myPizza = new Pizza(['onions'], 'Venkat');
console.log(myPizza.toppings);
console.log(myPizza.customer);
console.log(Pizza.extraToppings);
Pizza.sayThanyou();
myPizza.eat();
myPizza.toppings = ['Carrot', 'Almonds', 'Lobster']
console.log(myPizza.toppings);
console.log(myPizza.length)
console.log(myPizza.slices); // undefined
myPizza.length = 8;
console.log(myPizza.length);
myPizza.slices = 240; //Adding dynamic fields slices to my Pizza
console.log(myPizza.length); //dynamically adding slices
console.log(myPizza.slices); 
