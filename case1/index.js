
const timeOnPage = document.getElementById("timeOnPage");
const resetBtn = document.getElementById("resetBtn");
const exitOverlay = document.getElementById("exitOverlay");
const exitClose = document.getElementById("exitClose");

const minTime = 15;
const key = "exitmodalshown";
let seconds = 0;

setInterval( () => {
    seconds++;
    timeOnPage.textContent = `Время на странице: ${seconds} сек.`;
}, 1000);

exitClose.addEventListener("click" , () =>{
    exitOverlay.classList.remove("is-open");
});

document.addEventListener("mouseleave" , (e) => {
    if (e.clientY > 0) {
        return;
    };
    if (seconds < minTime) {
        return;
    };
    if (sessionStorage.getItem(key)){
        return;
    };

sessionStorage.setItem(key, "1");
exitOverlay.classList.add("is-open");
});

resetBtn.addEventListener("click" , () => {
    sessionStorage.removeItem(key);
    seconds = 0;
    timeOnPage.textContent = `Время на странице: ${seconds} сек.`;
});