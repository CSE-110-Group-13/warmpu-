// Function to initialize the task list
function initializeTaskList() {
    // Read the tasks data from the json file
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const tasksList = document.getElementById("taskList");
            // Iterate over every element
            data.journal.forEach(entry => {
                // Create a new list element for the date
                const date = document.createElement("div");
                date.innerHTML = `<h3>${entry.date}:</h3>`;
                // Append the item to the div
                tasksList.appendChild(date);       
                // Loop through each task
                entry.tasks.forEach(task => {
                    // Create a new list element for the task
                    const item = document.createElement("li");
                    item.innerHTML = `
                        <label class=${task.status === 'complete' ? 'strikethrough' : ''}>
                            ${task.description}
                            <input type="checkbox" onclick="taskOnClick(event)" ${task.status === "complete" ? "checked": ""}>
                            
                        </label>
                    `;
                    //Append the item to the unordered list
                    tasksList.appendChild(item);
                });
            });
        })

        // Handle any errors
        .catch(error => console.error("Error", error));

}

function taskOnClick(event) {
	if (event.target.checked) {
		event.target.parentElement.classList.add("strikethrough");
	} else {
		event.target.parentElement.classList.remove("strikethrough");
	}
}

initializeTaskList();