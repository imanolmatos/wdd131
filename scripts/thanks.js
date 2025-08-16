//DATES
let current = document.querySelector("#currentyear");
let lastM = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US",{timeZoneName:"short"});

current.innerHTML = today.getFullYear();
lastM.innerHTML = formatedLast;

// Hamburguer 

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector("#page-title");


hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
    title.classList.toggle("open");
});



// Local Storage

//Another Conditional Branching A


const counterDisplay = document.querySelector("#tripsCount");

let count =Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (count !== 0) {
    counterDisplay.textContent=count;
} else {
    counterDisplay.textContent = count;
}

count++;

localStorage.setItem("numVisits-ls",count)