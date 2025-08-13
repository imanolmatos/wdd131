 // Review Counter.

const counterDisplay = document.querySelector("#reviewCount");

let count =Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (count !== 0) {
    counterDisplay.textContent=count;
} else {
    counterDisplay.textContent = count;
}

count++;

localStorage.setItem("numVisits-ls",count)


//DATES
let current = document.querySelector("#currentyear");
let lastM = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US",{timeZoneName:"short"});

current.innerHTML = today.getFullYear();
lastM.innerHTML = formatedLast;

