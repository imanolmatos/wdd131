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

// Dynamic Beaches. Object and Array requirement requirement. 
const beaches = [
  {
    beachName: "Monte Río",
    location: "Azua de Compostela, Dominican Republic",
    distance: 5,
    imageUrl: "images/monte.webp"
  },
  {
    beachName: "Uvita",
    location: "Azua de Compostela, Dominican Republic",
    distance: 5.5,
    imageUrl: "images/uvita.webp"
  },
  {
    beachName: "Blanca",
    location: "Azua de Compostela, Dominican Republic",
    distance: 6,
    imageUrl: "images/blanca.webp"
  },
  {
    beachName: "Cueva de los piratas",
    location: "Azua de compostela, Dominican Republic",
    distance: 6.3,
    imageUrl: "images/cueva.webp"
  },
  {
    beachName: "El Barco",
    location: "Azua de compostela, Dominican Republic",
    distance: 6.5,
    imageUrl: "images/barco.webp"
  },
  {
    beachName: "La Caobita",
    location: "Barrera, Azua, Dominican Republic",
    distance: 30,
    imageUrl: "images/caobita.webp"
  },
  {
    beachName: "Palmar de Ocoa",
    location: "Las charchas,Azua, Dominican Republic",
    distance: 38.7,
    imageUrl: "images/ocoa.webp"
  },
  {
    beachName: "Tortuguero",
    location: "Las charcas, Azua, Dominican Republic",
    distance: 11,
    imageUrl: "images/tortuguero.webp"
  },
  {
    beachName: "Caracoles",
    location: "Las Charcas,Azua, Dominican Republic",
    distance: 12,
    imageUrl: "images/caracoles.webp"
  }
];



const photos = document.querySelector(".photos");


function createBeachCard(filteredBeaches) {
    document.querySelector(".photos").innerHTML = "";
    filteredBeaches.forEach(beach => {
     const figure = document.createElement("figure");
     const img = document.createElement("img");
     const figcaption = document.createElement("figcaption"); 
     const title = document.createElement("h3");
     title.innerHTML = beach.beachName;
     img.src = beach.imageUrl;
     img.alt = beach.beachName;
     img.loading = "lazy";
     figcaption.innerHTML = `<p><strong>Location: </strong>${beach.location}</p>
                             <p><strong>Distance: </strong>${beach.distance} kms </p>                                `
     figure.appendChild(title);
     figure.appendChild(img);
     figure.appendChild(figcaption);

     photos.appendChild(figure);    
});
}


 //Filters
   const reference = 10;
  const homeLink = document.querySelector("#home");
  const azLink = document.querySelector("#az");
  const zaLink = document.querySelector("#za");
  const farLink = document.querySelector("#far");
  const closeLink = document.querySelector("#closer");
  const titleH2 = document.querySelector("#page");

  //navegationUptaded
  const navegationUpdated = document.querySelectorAll(".nav-link");
  navegationUpdated.forEach(link =>
    link.addEventListener("click", () => {
        navegationUpdated.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    })
  );

createBeachCard(beaches);

   homeLink.addEventListener("click",() => {
        createBeachCard(beaches);  
        titleH2.innerHTML = "A Selection of 9 beaches in Azua"; 
   });

//az
   azLink.addEventListener("click",() => 
   {
    const sortedAZ = [...beaches].sort((a,b) =>
      a.beachName.localeCompare(b.beachName));
    createBeachCard(sortedAZ);
    titleH2.innerHTML = "Beaches A-Z";
  });


    //za
       zaLink.addEventListener("click",() => 
   {
    const sortedZA = [...beaches].sort((a,b) =>
      b.beachName.localeCompare(a.beachName));
    createBeachCard(sortedZA);
    titleH2.innerHTML = "Beaches Z-A";
  });

  //Conditional Branching for the click event  //Conditional branching requirement

  function conditionalBeach(event) {
      event.preventDefault();
      
      if (event.currentTarget.id ==="closer") {
        createBeachCard(beaches.filter(beach=> beach.distance < reference));
        titleH2.textContent = "Closer Beaches";
      }
      else
      {
        createBeachCard(beaches.filter(beach=> beach.distance > reference));
        titleH2.textContent ="Far Beaches";}

      }
  closeLink.addEventListener("click", conditionalBeach);
  farLink.addEventListener("click", conditionalBeach);  
