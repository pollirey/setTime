
const urgency = document.getElementById("urgency");
const viewCount = document.getElementById("viewCount");

let intervalId = null;
const showDelay = 5000;
const updateEvery = 10000;
const randInt = (min , max) => Math.floor(Math.random() * (max - min + 1)) + min;
setTimeout( () => {
    urgency.classList.add("is-visible");
    intervalId = setInterval( () => {
        viewCount.textContent = randInt(5 , 30);
    } , updateEvery);
} , showDelay);

// Задача 1
// const obj = {
//   value: 42,
//   getValue() {
//     return this.value;
//   }
// };

// const fn = obj.getValue;
// console.log(fn());

// Выведет undefined

// Задача 2
// const car = {
//   brand: "Toyota",
//   show() {
//     setTimeout(function() {
//       console.log(this.brand);
//     }, 100);
//   }
// };

// car.show();

// const car = {
//   brand: "Toyota",
//   show() {
//     setTimeout(() => {
//       console.log(this.brand);
//     }, 100);
//   }
// };

// car.show();

// Выведет Toyota

// Задача 3
// const obj = {
//   name: "Объект",
//   method() {
//     return () => this.name;
//   }
// };

// const arrow = obj.method();
// console.log(arrow());

// Выведет: Объект

// Задача 4
// function introduce(greeting) {
//   console.log(greeting + ", я " + this.name);
// }

// const person = { name: "Иван" };

// introduce.call(person, "Привет");
// introduce.apply(person, ["Здравствуйте"]);
