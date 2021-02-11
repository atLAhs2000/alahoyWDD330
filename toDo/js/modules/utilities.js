//function to add a task
function addTask() {
    let taskName = document.getElementById('taskInput').value;
    let task = new lsTask(taskName);

    //set localStorage item with lsTask
    task.set(taskName, false);

    //clear input
    document.getElementById('taskInput').value = '';
    console.log(localStorage);

    //display new task
    displayTask(taskName);
}

//function to affect completed tasks
function completeTask(event) {
    let checkBox = event.target;
    let selectTask = JSON.parse(localStorage.getItem(checkBox.name));
    selectTask.completed = !selectTask.completed;
    localStorage.setItem(selectTask.name, JSON.stringify(selectTask));
    checkIfCompleted(selectTask, checkBox, checkBox.parentElement);
}

//function to delete tasks
function deleteTask(event) {
    let delBtnClicked = event.target;
    if (delBtnClicked.tagName === 'I') {
        delBtnClicked = event.target.parentElement;
    }
    let taskDiv = delBtnClicked.parentElement;
    localStorage.removeItem(delBtnClicked.id);
    taskDiv.parentNode.removeChild(taskDiv);
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

function sortByAll() {
    let divArray = document.getElementsByTagName('div');
    for (let i = 0; i < divArray.length; i++) {
        let currentDiv = divArray[i];
        if (currentDiv.classList.contains('hide')) {
            currentDiv.classList.remove('hide');
        }
    }
}

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