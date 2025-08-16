

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

  //DATES
let current = document.querySelector("#currentyear");
let lastM = document.querySelector("#last");

let today = new Date();
let lastModif = new Date(document.lastModified);
let formatedLast = lastModif.toLocaleString("en-US",{timeZoneName:"short"});

current.innerHTML = today.getFullYear();
lastM.innerHTML = formatedLast;





  //Populate list 
    const products = [
  {
    id: "MR001",
    name: "Cap, Monte Río Route",
    priceUSD: 6.50,
    priceDOP: 390
  },
  {
    id: "MR002",
    name: "Reusable Water Bottle, Monte Río Route",
    priceUSD: 5.00,
    priceDOP: 300
  },
  {
    id: "MR003",
    name: "T-Shirt, Monte Río Route",
    priceUSD: 8.75,
    priceDOP: 525
  },
  {
    id: "MR004",
    name: "Coffee Mug, Monte Río Route",
    priceUSD: 4.25,
    priceDOP: 255
  },
  {
    id: "MR005",
    name: "Keychain, Monte Río Route",
    priceUSD: 1.50,
    priceDOP: 90
  },
  {
    id: "MR006",
    name: "Rug, Monte Río Route",
    priceUSD: 10.00,
    priceDOP: 600
  },
  {
    id: "MR007",
    name: "Tote Bag, Monte Río Route",
    priceUSD: 6.00,
    priceDOP: 360
  },
  {
    id: "MR008",
    name: "Hoodie, Monte Río Route",
    priceUSD: 12.00,
    priceDOP: 720
  }
];



const selection = document.querySelector("#productSelected");


const sorted = [...products].sort((a,b) => a.name.localeCompare(b.name));

sorted.forEach(product =>
{const option = document.createElement("option");
option.textContent = product.name;
option.value = product.id;
selection.appendChild(option);
}
 );



