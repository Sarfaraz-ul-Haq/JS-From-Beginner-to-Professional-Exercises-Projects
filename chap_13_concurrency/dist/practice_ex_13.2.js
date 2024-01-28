"use strict";
//In this exercise, you will create a counter that will output the values in sequence
//using Promises.
const promise = new Promise((res, rej) => {
    res("Start Counting");
    const counter = (val) => console.log(val);
});
promise
    .then((txt) => {
    console.log(txt);
    return "one";
})
    .then((val) => {
    console.log(val);
    return "two";
})
    .then((val) => {
    console.log(val);
    return "three";
})
    .then((val) => {
    console.log(val);
});
// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 8;
//   if (x > 10) {
//   resolve(x); // on success
//   } else {
//   reject("Too low"); // on error
//   }
//  });
//  promise.then(
//   function (value) {
//   console.log("Success:", value);
//   },
//   function (error) {
//   console.log("Error:", error);
//   }
//  );
