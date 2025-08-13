const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");



let chaptersArray = getChapterList() || [];
chaptersArray.forEach(displayList);



button.addEventListener('click', () => {
   const value = input.value.trim();
  if (value!= '') {  // make sure the input is not empty 
    displayList(value); // call the function that outputs the submitted chapter
    chaptersArray.push(value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});


function displayList(item) {
  const li = document.createElement("li");
  const deletebutton = document.createElement("button");
  li.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
};

function setChapterList() {
  localStorage.setItem("MyFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("MyFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();

}



