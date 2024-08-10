let containerCounter = document.createElement("div");
let plus = document.createElement("button");
let counter = document.createElement("div");
let minus = document.createElement("button");

let body = document.body;

let counterDisplay = 0;
let plusDisplay = "➕";
let minusDisplay = "➖";

body.appendChild(containerCounter);
containerCounter.classList.add("counter-container");

containerCounter.appendChild(plus);
containerCounter.appendChild(counter);
containerCounter.appendChild(minus);

plus.classList.add("plus-counter");
counter.classList.add("counter");
minus.classList.add("minus-counter");

counter.textContent = counterDisplay;
plus.textContent = plusDisplay;
minus.textContent = minusDisplay;

plus.addEventListener("click", ()=>{
    counterDisplay++
    counter.textContent = counterDisplay;  

})
minus.addEventListener("click", ()=>{
    counterDisplay--
    counter.textContent = counterDisplay;  

})
