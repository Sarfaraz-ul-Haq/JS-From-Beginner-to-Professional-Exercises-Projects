/* In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure */

let inventory: { [key: string]: any }[] = [];

const item1 = {
  name: "Potato Peeler",
  model: 567,
  cost: 300,
  qty: 100,
};

const item2 = {
  name: "Watermelon Slicer",
  model: 321,
  cost: 500,
  qty: 50,
};

const item3 = {
  name: "Garlic Chopper",
  model: 567,
  cost: 250,
  qty: 200,
};

inventory.push(item1);
inventory.push(item2);
inventory.push(item3);

console.log(inventory);
