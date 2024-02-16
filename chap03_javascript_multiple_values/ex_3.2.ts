/* Practice exercise 3.2
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
"Pop", "Juice", "Pop"] */

const shoppingList = [];

shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

shoppingList.splice(1, 1, "Bananas", "Eggs");

const lastElement = shoppingList.pop();
console.log(lastElement);

shoppingList.sort();

console.log(shoppingList.indexOf("Milk"));

shoppingList.splice(1, 0, "Carrots", "Lettuce");

const newList = ["Juice", "Pop"];

const combinedList = [...shoppingList, ...newList, ...newList];
console.log(combinedList.lastIndexOf("Pop"));

console.log(combinedList);
