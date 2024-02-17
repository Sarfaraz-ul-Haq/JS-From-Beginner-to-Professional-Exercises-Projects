/* 1. Create an object named people that contains an empty array that is called
friends.
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console. */

let friends: { [key: string]: any }[] = [];

let people = { friends };

let var1 = {
  friendsFirstName: "Ahmed",
  friendsLastName: "Ali",
  ID: 12345,
};
let var2 = {
  friendsFirstName: "Noman",
  friendsLastName: "Mehmood",
  ID: 12345,
};
let var3 = {
  friendsFirstName: "Abdullah",
  friendsLastName: "Khan",
  ID: 12345,
};

friends.push(var1);
friends.push(var2);
friends.push(var3);

console.log(people);
