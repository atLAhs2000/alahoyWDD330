import { addBtn, sortAll, sortComplete, sortIncomplete, date } from './modules/variables.js';
import { addTask, displayTask, sortByAll, sortByComplete, sortByIncomplete } from './modules/utilities.js'


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

document.getElementById("copyright-date").innerHTML = date.getFullYear();

//add event listeners
addBtn.addEventListener('click', addTask);
//event listener to sort tasks by all
sortAll.addEventListener('click', sortByAll);
//event listener to sort tasks by completed
sortComplete.addEventListener('click', sortByComplete);
//event listener to sort tasks by incomplete
sortIncomplete.addEventListener('click', sortByIncomplete);
