// Selecting input & ul element
const inputBox = document.getElementById("input-txt");
const listContainer = document.getElementById("list-container");

function addTask() {
    // When Input field is empty
    if (inputBox.value === "") {
        alert("Write your task before adding.");
    } else { // When Input field is not empty
        let li = document.createElement('li'); // Creating li element
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span'); // Creating span element
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // Cleaning Input field after adding task
    saveTask(); // saving the task
}

// Adding eventListener on ul element
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") { // When target is List element
        e.target.classList.toggle('checked'); // applied that style from checked class
        saveTask(); // saving the task
    } else if (e.target.tagName === "SPAN") { // When target is Span element
        e.target.parentElement.remove(); // remove that list element
        saveTask(); // saving the task
    }
}, false);

// function thats save the task
function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// function that loads the saved task
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
loadTasks()