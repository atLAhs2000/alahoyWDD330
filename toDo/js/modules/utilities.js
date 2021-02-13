import { listSect, numTasksLeft } from './variables.js';
import lsTask from './ls.js';

//function to add a task
function addTask() {
    let taskName = document.getElementById('taskInput').value;
    //check if there's actually a value inside the input
    if (taskName === "") {
        alert('Please enter a task.');
    } else {
        let task = new lsTask(taskName);

        //set localStorage item with lsTask
        task.set(taskName, false);
        
        //clear input
        document.getElementById('taskInput').value = '';
        
        //display new task
        displayTask(taskName);
    }
}

//function to affect completed tasks
function completeTask(event) {
    let checkBox = event.target;
    //get the specific task based on which checkbox was clicked
    let selectTask = JSON.parse(localStorage.getItem(checkBox.name));
    selectTask.completed = !selectTask.completed;
    localStorage.setItem(selectTask.name, JSON.stringify(selectTask));
    checkIfCompleted(selectTask, checkBox, checkBox.parentElement);
    numTasksLeft.textContent = checkHowManyLeft();
}

//function to delete tasks
function deleteTask(event) {
    let delBtnClicked = event.target;
    //find what was clicked and deletes the appropriate task
    if (delBtnClicked.tagName === 'I') {
        delBtnClicked = event.target.parentElement;
    }
    let taskDiv = delBtnClicked.parentElement;
    localStorage.removeItem(delBtnClicked.id);
    taskDiv.parentNode.removeChild(taskDiv);
    numTasksLeft.textContent = checkHowManyLeft();
}

//function to display tasks
function displayTask(name) {
    //display new task
    let taskDiv = document.createElement('div');
    let checkOff = document.createElement('input');
    checkOff.type = 'checkbox';
    checkOff.name = name;
    let taskTitle = document.createElement('h3');
    let deleteBtn = document.createElement('button');

    //if statement to leave checkbox checked depending on if task is completed
    let selectTask = JSON.parse(localStorage.getItem(name));
    checkIfCompleted(selectTask, checkOff, taskDiv);

    //append and set content for them
    taskTitle.classList.add('taskHeading');
    taskTitle.textContent = name;
    deleteBtn.innerHTML = '<i class="fas fa-2x fa-times"></i>';
    deleteBtn.setAttribute('id', name);
    taskDiv.appendChild(checkOff);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(deleteBtn);

    //assign event listeners
    checkOff.addEventListener('click', completeTask);
    deleteBtn.addEventListener('click', deleteTask);

    listSect.appendChild(taskDiv);
    numTasksLeft.textContent = checkHowManyLeft();
}

//function to check if a task is completed and add/remove the appropriate classes
function checkIfCompleted(task, checkbox, div) {
    if (task.completed === true) {
        checkbox.checked = true;
        if (div.classList.contains('active')) {
            div.classList.remove('active');
        }
        div.classList.add('completed');
    } else {
        checkbox.checked = false;
        if (div.classList.contains('completed')) {
            div.classList.remove('completed');
        }
        div.classList.add('active');
    }
}

//function to sort tasks by all using classes
function sortByAll() {
    let divArray = document.getElementsByTagName('div');
    for (let i = 0; i < divArray.length; i++) {
        let currentDiv = divArray[i];
        if (currentDiv.classList.contains('hide')) {
            currentDiv.classList.remove('hide');
        }
    }
}


//function to sort tasks by completed
function sortByComplete() {
    let divArray = document.getElementsByTagName('div');
    for (let i = 0; i < divArray.length; i++) {
        let currentDiv = divArray[i];
        if (currentDiv.classList.contains('active')) {
            currentDiv.classList.add('hide');
        } else {
            if (currentDiv.classList.contains('hide')) {
                currentDiv.classList.remove('hide');
            }
        }
    }
}

//sort by incomplete
function sortByIncomplete() {
    let divArray = document.getElementsByTagName('div');
    for (let i = 0; i < divArray.length; i++) {
        let currentDiv = divArray[i];
        if (currentDiv.classList.contains('completed')) {
            currentDiv.classList.add('hide');
        } else {
            if (currentDiv.classList.contains('hide')) {
                currentDiv.classList.remove('hide');
            }
        }
    }
}

//function to check how many tasks are left
function checkHowManyLeft() {
    let tasksLeft = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let listedTask = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (listedTask.completed === false) {
            tasksLeft++;
        }
    }

    return tasksLeft;
}

export { addTask, completeTask, deleteTask, displayTask, checkIfCompleted, sortByAll, sortByComplete, sortByIncomplete, checkHowManyLeft };