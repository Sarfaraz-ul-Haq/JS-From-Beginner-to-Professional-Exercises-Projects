const myTable = [];

let numOfRows = 10;

let numOfCols = 5;

let counter = 0;

for (let i = 0; i < numOfRows; i++) {
  let tempTable = [];

  for (let i = 0; i < numOfCols; i++) {
    counter++;
    tempTable.push(counter);

    myTable.push(tempTable);
  }
}

console.log(myTable);
