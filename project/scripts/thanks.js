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





 //Filters

 
  const navegationUpdated = document.querySelectorAll(".nav-link");
  navegationUpdated.forEach(link =>
    link.addEventListener("click", () => {
        navegationUpdated.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    })

    
  );
