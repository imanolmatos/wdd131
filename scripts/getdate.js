let year = document.querySelector("#currentyear");
let last = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US", {timeZoneName: "short"});


year.innerHTML = today.getFullYear();
last.innerHTML = formatedLast;