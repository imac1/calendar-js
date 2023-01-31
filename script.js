
//slider

const containers = document.querySelectorAll('.container .header');
let currentMonth = 1;


const rightArrows = document.querySelectorAll(".right-arow");
for (const rightArrow of rightArrows) {
    rightArrow.addEventListener("click", (event) => {
        currentMonth++;

        if (currentMonth >= containers.length) {
            currentMonth = 0;
        }

        updateCalendarDisplay();
    });
}

const leftArrows = document.querySelectorAll(".left-arrow");
for (const leftArrow of leftArrows) {
    leftArrow.addEventListener("click", (event) => {
        currentMonth--;
        console.log(` current month ${currentMonth}`);

        if (currentMonth < 0) {
            currentMonth = containers.length - 1;
        }

        updateCalendarDisplay();
    });
}



function updateCalendarDisplay() {
    for (const container of containers) {
        container.parentElement.style.display = "none";
    }

    containers[currentMonth].parentElement.style.display = "block";
}

updateCalendarDisplay();

// add a green dot under the days in calendar

const days = document.querySelectorAll(".day");
days.forEach(day => {
    day.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

// toggle active icon in task body

const icons = document.querySelectorAll('.todo-item div:first-child');

icons.forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
// add new task in task container

const addButton = document.querySelector('.add-button');
const todoContainer = document.querySelector('.todo-container ul');

addButton.addEventListener('click', function () {
    const newTask = document.createElement('div');
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    newTask.appendChild(taskInput);
    todoContainer.appendChild(newTask);
    taskInput.focus();
    taskInput.addEventListener('blur', function () {
        const taskBody = document.createElement('div');
        taskBody.classList.add('todo-body');
        taskBody.innerText = taskInput.value;
        newTask.innerHTML = '';
        newTask.appendChild(taskBody);
    });
});

