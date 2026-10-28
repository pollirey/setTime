
const orderForm = document.getElementById("orderForm");
const reminder = document.getElementById("reminder");
const reminderClose = document.getElementById("reminderClose");

const ms = 10000;
let timerId = null;
let submitted = false;

function showReminder() {
    if(submitted) {
        return;
    }
    reminder.classList.add("is-visible");
};

function hidenReminder() {
    reminder.classList.remove("is-visible");
};

function resetIdle(){
    clearTimeout(timerId);
    hidenReminder();
    timerId = setTimeout(showReminder , ms);
 }

 ["mousemove" , "keydown" , "scroll" , "click" , "touchstart"].forEach(event => {
    document.addEventListener(event, resetIdle , {passive: true});
 });

 document.addEventListener("visibilitychange" , () => {
    if(document.hidden) {
        clearTimeout(timerId);
    } else {
        resetIdle();
    }
 });

 reminderClose.addEventListener("click" , resetIdle);

 orderForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    submitted = true;
    clearTimeout(timerId);
    hidenReminder();
    alert("Заказ отправлен");
 });

 resetIdle();