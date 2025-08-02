//Footer dates

let current = document.querySelector("#currentyear");
let lastM = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US",{timeZoneName:"short"});

current.innerHTML = today.getFullYear();
lastM.innerHTML = formatedLast;

//Wind chill 

let temperature = parseInt(document.querySelector("#temperature").textContent);
let wind = parseInt(document.querySelector("#wind").textContent);
let windSpeed = document.querySelector("#wind-chill");

const calculateWindChill = (T,V) => 13.12 + 0.6215 * T - 11.37 * V**0.16 + 0.3965 * T * V**0.16;


if (temperature <= 10 && wind > 4.8) {
windSpeed.innerHTML = Math.round(calculateWindChill(temperature,wind)); 
} else {
    windSpeed.innerHTML = "N/A";
}


