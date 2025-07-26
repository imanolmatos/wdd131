const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// function copyInput() {
//     imput;
//     li;
//     li.textContent = imput.value;
// }

button.addEventListener("click", function () {
    if (input.value.trim() !== "") { // create element 
        const li = document.createElement("li");
        // create delete button
        const deleteButton = document.createElement("button");
        // Populate the li element with the input value.
        li.textContent = input.value;

        // Populate the button with an x

        deleteButton.textContent = "❌";

        // Appen the li element variable with the delete button.

        li.append(deleteButton);

        //Append the li elements to the unourder list. 
        list.append(li);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
        input.focus(); 
      }
    });