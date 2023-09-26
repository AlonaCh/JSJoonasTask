// Write code which models a pizza as a class. Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.

const extraToppings = 50;
const numberOfFreeToppings = 4;
// without constructor
// class declaration
class Pizza {
    name;
    toppings = [];
    basePrice = 0; // in cents (not use floating point number)
    size = 'S';

    constructor(name, toppings, basePrice) {
        this.name = name; // we set the property of the object
        this.toppings = toppings;
        this.basePrice = basePrice;
}
// methods will be added to .prototype property. Will be the prototype of the object created by the class Pizza.
        getPrice() {
           let extraToppings = this.toppings.length - numberOfFreeToppings;
           if (extraToppings < 0) {
            extraToppings = 0;
           }
           return this.basePrice + extraToppings * extraToppings;
        }
}
const americano2 = new Pizza('americano', ['ham', 'tomato', 'cheese'], 1000);
americano2.basePrice = 1100;

const americano1 = new Pizza();
americano1.name = 'americano';
americano1.toppings = ['ham', 'tomato', 'cheese'];
console.log(americano1.getPrice());

//Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order. 
// Order can be updated by adding pizzas to it with a method of the order class.
const deliveryHome = 10;
const pizzaPrice = 100;

class PizzaOrder {
    customerName = ''; 
    deliveryType = 'EAT_IN'; // other values are TAKE_OUT, DELIVERY. It is not for user.
    pizzas = [];

constructor(customerName, deliveryType, pizzas) {
    this.customerName = customerName;
    this.deliveryType = deliveryType;
    this.pizzas= pizzas;
}

addPizza(pizza) {
    this.pizzas.push(pizza);
}

getPrice() {
    let totalPrice = 0;
    //1) check delivery type and add delivery fee if needed
    //2) loop over the pizzas and sum up their prices
    for (const pizza of this.pizzas) {
    if (deliveryType === 'deliveryHome') {
         totalPrice +=10;
         totalPrice += pizzaPrice;
        }
        return totalPrice;
    }
} }
const firstPizzaOrder = new PizzaOrder('Alona', 'deliveryHome', ['Pia', 'Tantarella', 'Italiano']);
const secondPizzaOrder = new PizzaOrder('Oleh', 'eatIn', ['Oliva', 'Fromage', 'Mozarella']);
const thirdPizzaOrder = new PizzaOrder('Ilona', 'take', ['Italia', 'Paprika', 'Spicy']);
firstPizzaOrder.addPizza();
firstPizzaOrder.getPrice();
secondPizzaOrder.addPizza();
secondPizzaOrder.getPrice();
thirdPizzaOrder.addPizza();
thirdPizzaOrder.getPrice();
console.log(firstPizzaOrder);
