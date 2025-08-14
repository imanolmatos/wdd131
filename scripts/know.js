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

// Dynamic Beaches
const beaches = [
  {
    beachName: "Monte Río",
    location: "Azua de Compostela, Dominican Republic",
    distance: 5,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    beachName: "Uvita",
    location: "Azua de Compostela, Dominican Republic",
    distance: 5.5,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    beachName: "Blanca",
    location: "Azua de Compostela, Dominican Republic",
    distance: 6,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    beachName: "Cueva de los piratas",
    location: "Azua de compostela, Dominican Republic",
    distance: 6.3,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    beachName: "El Barco",
    location: "Azua de compostela, Dominican Republic",
    distance: 6.5,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    beachName: "La Caobita",
    location: "Barrera, Azua, Dominican Republic",
    distance: 30,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    beachName: "Palmar de Ocoa",
    location: "Las charchas,Azua, Dominican Republic",
    distance: 38.7,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    beachName: "Tortuguero",
    location: "Las charcas, Azua, Dominican Republic",
    distance: 11,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
  {
    beachName: "Caracoles",
    location: "Las Charcas,Azua, Dominican Republic",
    distance: 12,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg"
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
                             <p><strong>Distance: </strong>${beach.distance} kms </p>                                    `
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

  //Conditional Branching 


function handleDistanceClick(e) {
    e.preventDefault(); 
    // Si el botón clickeado es el de "closer"
    if (e.currentTarget.id == "closer") {
        createBeachCard(beaches.filter(beach => beach.distance < reference));
        titleH2.textContent = "Closer Beaches";
    } else { 
        // Si no es closer, entonces es "far"
        createBeachCard(beaches.filter(beach => beach.distance > reference));
        titleH2.textContent = "Far Beaches";
    }
}

// Asignamos la misma función a ambos
closeLink.addEventListener("click", handleDistanceClick);
farLink.addEventListener("click", handleDistanceClick);




append

