
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
 