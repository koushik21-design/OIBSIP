// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const allTasksBtn = document.getElementById('all-tasks');
    const completedTasksBtn = document.getElementById('completed-tasks');
    const incompletedTasksBtn = document.getElementById('incompleted-tasks');

    taskForm.addEventListener('submit', addTask);
    allTasksBtn.addEventListener('click', () => filterTasks('all'));
    completedTasksBtn.addEventListener('click', () => filterTasks('completed'));
    incompletedTasksBtn.addEventListener('click', () => filterTasks('incomplete'));

    function addTask(event) {
        event.preventDefault();

        const taskName = document.getElementById('task-name').value;
        const taskDesc = document.getElementById('task-desc').value;

        const taskItem = document.createElement('li');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = taskName;

        const taskDescription = document.createElement('p');
        taskDescription.textContent = taskDesc;

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed');
        });

        taskDetails.appendChild(taskCheckbox);
        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskDescription);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskForm.reset();
    }

    function filterTasks(filter) {
        const tasks = taskList.getElementsByTagName('li');
        for (let task of tasks) {
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'completed':
                    if (task.classList.contains('completed')) {
                        task.style.display = '';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
                case 'incomplete':
                    if (!task.classList.contains('completed')) {
                        task.style.display = '';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
            }
        }
    }
});
