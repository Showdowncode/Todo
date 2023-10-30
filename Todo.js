// Gir funksjon til "addTaskButton".
document.addEventListener("DOMContentLoaded", function () {
    const Title2Input = document.getElementById("Title2");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);
});

// Dette gjør at "addTask" får en nunksjon med å legge til en ny oppgave.
function addTask() {
  const Title2Input = document.getElementById("Title2");
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.textContent = Title2Input.value;
  taskList.appendChild(newTask);

  // Legger til "Remove" knapp for hver oppgave.
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Task";
  removeButton.addEventListener("click", function () {
    taskList.removeChild(newTask);
  });
  newTask.appendChild(removeButton);
}

// Event listener for "Add Task" knappen.
const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

