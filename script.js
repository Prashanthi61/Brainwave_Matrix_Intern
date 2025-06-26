const plannerDate = document.getElementById('planner-date');
const currentDateDisplay = document.getElementById('current-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

plannerDate.addEventListener('change', () => {
    const selected = new Date(plannerDate.value);
    if (!isNaN(selected)) {
        const formatted = selected.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        currentDateDisplay.textContent = formatted;
    } else {
        currentDateDisplay.textContent = '';
    }
});

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.title = 'Delete task';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.border = 'none';
    deleteBtn.style.color = 'red';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
});