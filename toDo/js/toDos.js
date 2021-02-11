//variables
const listSect = document.getElementById('taskList');
var addBtn = document.getElementById('addTask');
//onload event to display tasks set by person in local storage
window.onload = function() {
    console.log(localStorage);
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let listedTask = JSON.parse(localStorage.getItem(localStorage.key(i)));
            displayTask(listedTask.name);
        }
    }
};

//add event listeners
addBtn.addEventListener('click', addTask);

//create object to be able to call localStorage
var lsTask = (function () {
    //constructor to create more
    var Constructor = function (id) {
        this.id = id;
    };

    //prototype method to set local storage items
    Constructor.prototype.set = function (name, completion) {
        localStorage.setItem(this.id, JSON.stringify({
            timestamp: new Date().getTime(),
            name: name,
            completed: completion
        }));
    };

    Constructor.prototype.get = function () {
        var data = localStorage.getItem(this.id);
        data = data ? JSON.parse(data) : null;
        if (data) return data;
    }

    return Constructor
})();

/*var testing = new lsTask('testing');
testing.set('Clean kitchen', false);
console.log(testing.get('testing'));*/

function init() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let listedTask = localStorage[i].get(localStorage[i]);
            console.log(listedTask);
        }
    }
}

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

//function to cross out tasks that have been completed
function completeTask(event) {
    let checkBox = event.target;
    let selectTask = JSON.parse(localStorage.getItem(checkBox.name));
    selectTask.completed = !selectTask.completed;
    localStorage.setItem(selectTask.name, JSON.stringify(selectTask));
}

function displayTask(name) {
    //display new task
    let taskDiv = document.createElement('div');
    let checkOff = document.createElement('input');
    checkOff.type = 'checkbox';
    checkOff.name = name;
    let taskTitle = document.createElement('h3');

    //assign event handler to checkbox
    checkOff.addEventListener('click', completeTask);
    //if statement to leave checkbox checked depending on if task is completed
    let selectTask = JSON.parse(localStorage.getItem(name));
    if (selectTask.completed === true) {
        checkOff.checked = true;
        if (taskDiv.classList.contains('active')) {
            taskDiv.classList.remove('active');
        }
        taskDiv.classList.add('completed');
    } else {
        checkOff.checked = false;
        if (taskDiv.classList.contains('completed')) {
            taskDiv.classList.remove('completed');
        }
        taskDiv.classList.add('active');
    }

    taskTitle.classList.add('taskHeading');
    taskTitle.textContent = name;
    taskDiv.appendChild(checkOff);
    taskDiv.appendChild(taskTitle);

    listSect.appendChild(taskDiv);
}