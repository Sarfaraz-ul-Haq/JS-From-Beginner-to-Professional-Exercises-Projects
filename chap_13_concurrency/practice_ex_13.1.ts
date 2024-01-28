// This exercise will demonstrate how to use a callback function, creating a way to pass
// a value from one function to another by invoking a callback function. We will create
// a greeting callback using a full name in a string.

//first function
const greet = (fullName: string[]) => {
  for (const name of fullName) {
    console.log(`Hello ${name}`);
  }
};
const fullNameArr = ["Hamzah Syed", "Zia Khan", "Jahanzaib Tayyab"];
// greet(fullNameArr);

//second function
const greet2 = (fullName: string) => {
  const arrFromStr = fullName.split("");
  greet(arrFromStr);
};
greet2("Sarfaraz ul Haq");
