const promise = new Promise<string>((resolve, reject) => {
  resolve("Start Counting");
});

const counter = (value: string) => console.log(value);

promise
  .then((value) => {
    counter(value);
    return "One";
  })
  .then((value) => {
    counter(value);
    return "Two";
  })
  .then((value) => {
    counter(value);
    return "Three";
  })
  .then((value) => {
    counter(value);
  });
