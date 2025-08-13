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

// Dynamic temples

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santo Domingo Temple",
    location: "Santo Domingo, Dominican Republic",
    dedicated:  "1993, September, 17",
    area: 67000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
   {
    templeName: "San Juan Puerto Rico Temple",
    location: "San Juan, PR",
    dedicated:  "2023, January, 15",
    area: 6990,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg"
  },
  {
    templeName: "Guatemala City Guatemala Temple",
    location: "Guatemala City, Guatemala",
    dedicated:  "2023, January, 15",
    area: 11610,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6407-thumb.jpg",
  },
   {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated:  "1999, March, 21",
    area: 45800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg",
  },
   {
    templeName: "Sao Paulo Brazil Temple",
    location: "Sao Paulo, Brazil",
    dedicated:  "1978, November, 2",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg",
  },
];


const photos = document.querySelector(".photos");


function createTempleCard(filteredTemples) {
    document.querySelector(".photos").innerHTML = "";
    filteredTemples.forEach(temple => {
     const figure = document.createElement("figure");
     const img = document.createElement("img");
     const figcaption = document.createElement("figcaption"); 
     const title = document.createElement("h3");
     title.innerHTML = temple.templeName;
     img.src = temple.imageUrl;
     img.alt = temple.templeName;
     img.loading = "lazy";
     figcaption.innerHTML = `<p><strong>Location: </strong>${temple.location}</p>
                             <p><strong>Dedicated: </strong>${temple.dedicated}</p>
                             <p><strong>Size: </strong>${temple.area} sq ft </p>                                    `
     figure.appendChild(title);
     figure.appendChild(img);
     figure.appendChild(figcaption);

     photos.appendChild(figure);    
});
}


 //Filters
   const refOld = 1900;
  const refNew = 2000;
  const refSmall = 10000;
  const refLarge = 90000;
  const homeLink = document.querySelector("#home");
  const oldLink = document.querySelector("#old");
  const newLink = document.querySelector("#new");
  const largeLink = document.querySelector("#large");
  const smallLink = document.querySelector("#small");
  const titleH2 = document.querySelector("#page");
  const getYear = (s) => 
    Number(String(s).split(",")[0].trim());
 
  const navegationUpdated = document.querySelectorAll(".nav-link");
  navegationUpdated.forEach(link =>
    link.addEventListener("click", () => {
        navegationUpdated.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    })

    
  );

createTempleCard(temples);
//olders
 oldLink.addEventListener("click",() => {
    const olders =  temples.filter(temple => 
        getYear(temple.dedicated) < refOld); 
        createTempleCard(olders);   
        titleH2.innerHTML = "Old Temples";
        
 }); 

//new
  newLink.addEventListener("click",() => {
    const newers =  temples.filter(temple => 
        getYear(temple.dedicated) > refNew); 
        createTempleCard(newers);  
        titleH2.innerHTML = "New Temples"; 
 }); 

 //home 
   homeLink.addEventListener("click",() => {
        createTempleCard(temples);  
        titleH2.innerHTML = "Temple Home"; 
   });


   largeLink.addEventListener("click",() => 
   {
    const largers = temples.filter(temple => 
        temple.area > refLarge);
        createTempleCard(largers);
        titleH2.innerHTML = "Large Temples";

   }
    );

      smallLink.addEventListener("click",() => 
   {
    const smallers = temples.filter(temple => 
        temple.area < refSmall);
        createTempleCard(smallers);
        titleH2.innerHTML = "Small Temples";
   }
    );








