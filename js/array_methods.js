"use strice";

//  filter
const names = ["Ivan", "Nurbolot", "Erlan", "Kalybek", "Beka"];

const filterNames = names.filter((name) => name.length < 5);

console.log(filterNames);

//  every/some
const arr = ["df", 5, "jds"];

const someArr = arr.some((item) => item == "number");

const everyArr = arr.every((item) => typeof item == "number");

console.log(everyArr);

//  reduce
const numbers = [4, 5, 1, 3, 6, 2];

const result = numbers.reduce((sum, num) => sum + num, 1);

console.log(result);

const array = ["apple", "babana", "cherry", "grape"];

const res = array.reduce((fruits, fruit) => `${fruits}, ${fruit}`);
console.log(res);

///=======

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] == "persone")
  .map((item) => item[0]);

console.log(newArr);
