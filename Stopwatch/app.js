let time = document.querySelector("#time")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

let hours = 0;
let min = 0;
let sec = 0;
let IntervalId = null;

function updateUI(){
    const h = String(hours).padStart(2, "0");
    const m = String(min).padStart(2, "0");
    const s = String(sec).padStart(2, "0");
    time.textContent = `${h} : ${m} : ${s}`;
}

start.addEventListener("click", () => {
    if(IntervalId !== null) return;
sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hours++;
        }
    }
        updateUI();

IntervalId = setInterval(() => {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hours++;
        }
    }

    updateUI();
}, 1000); 
})

stop.addEventListener("click", () =>{
    clearInterval(IntervalId);
    IntervalId = null;

})

reset.addEventListener("click", () =>{
    clearInterval(IntervalId);
    IntervalId = null;
    hours = 0;
    min = 0;
    sec = 0;
        updateUI();

})