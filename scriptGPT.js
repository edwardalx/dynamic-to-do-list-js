document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(taskText, save = true) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";

        removeBtn.onclick = () => {
            taskList.removeChild(listItem);

            // Remove from localStorage
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = tasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        taskInput.value = "";
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false));
    }

    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }
        addTask(taskText);
    });

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    loadTasks(); // Call to populate from storage
});
