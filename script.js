

document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul");
    const forms = document.forms;

    // Delete movies
    list.addEventListener("click", function (e) {
        if (e.target.className === "delete") {
            const li = e.target.parentElement.parentElement; 
            li.parentNode.removeChild(li);
        }
    });

    // Edit movies
    list.addEventListener("click", function (e) {
        if (e.target.className === "edit") {
            const li = e.target.parentElement.parentElement; 
            const movieNameSpan = li.querySelector(".name");
            const currentName = movieNameSpan.textContent;

            const input = document.createElement("input");
            input.type = "text";
            input.value = currentName;
           
            movieNameSpan.replaceWith(input);

             const saveBtn = document.createElement("span");


            saveBtn.textContent = "Save";
            saveBtn.classList.add("save");

              saveBtn.style.cssText = `
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        margin-left: 8px;
        transition: background-color 0.3s;
      `;

      // Add hover effects to save button
      saveBtn.addEventListener("mouseenter", () => {
        saveBtn.style.backgroundColor = "#45a049";
      });
      saveBtn.addEventListener("mouseleave", () => {
        saveBtn.style.backgroundColor = "#4CAF50";
      });

            e.target.replaceWith(saveBtn);


        } else if (e.target.className === "save") {
            const li = e.target.parentElement.parentElement; 
            const input = li.querySelector("input[type='text']");
            const newName = input.value.trim();

            if (!newName) {
                alert("Please enter a movie name!");
                return;
            }

          
            const movieNameSpan = document.createElement("span");
            movieNameSpan.classList.add("name");
            movieNameSpan.textContent = newName;

            
            input.replaceWith(movieNameSpan);

            const editBtn = document.createElement("span");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit");
            e.target.replaceWith(editBtn);
        }
    });

    // Add movie
    const addMovieForm = forms["add-movie"];
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const userInput = addMovieForm.querySelector('input[type="text"]').value.trim();

        if (!userInput) {
            alert("Please enter a movie name!");
            return;
        }

        // Create elements
        const li = document.createElement("li");
        const movieName = document.createElement("span");
        const buttonDiv = document.createElement("div");
        const editBtn = document.createElement("span");
        const deleteBtn = document.createElement("span");

        // Add content
        movieName.textContent = userInput;
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";

        // Add classes
        movieName.classList.add("name");
        buttonDiv.classList.add("buttonDesign");
        editBtn.classList.add("edit");
        deleteBtn.classList.add("delete");

        // Append to DOM
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(deleteBtn);
        li.appendChild(movieName);
        li.appendChild(buttonDiv);
        list.appendChild(li);

        // Reset form
        addMovieForm.reset();
    });
});
