const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const button = document.getElementById('Button');
const form = document.getElementById('taskForm')
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ''){
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function saveTask(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(taskInput.value);
    localStorage.setitem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('submit');
    saveTask();
   
    addTask();
    loadTasks();
})