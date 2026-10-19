
const percent = document.getElementById('percent');
const fill = document.getElementById('fill');
const startBtn = document.getElementById('start');

startBtn.addEventListener("click" ,() => {
    let progress = 0;
    startBtn.disabled = true;
    fill.style.width = "0%";
    percent.textContent = "0%";

    const intervalId = setInterval( () => {
        progress += 2;
        fill.style.width = `${progress}%`;
        percent.textContent = `${progress}%`;
        if(progress >= 100){
            clearInterval(intervalId);
            startBtn.disabled = false;
        }

    } , 50)
})