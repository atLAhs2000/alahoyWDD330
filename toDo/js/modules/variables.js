//variables
const listSect = document.getElementById('taskList');
const addBtn = document.getElementById('addTask');
const sortAll = document.getElementById('sortAll');
const sortComplete = document.getElementById('sortComplete');
const sortIncomplete = document.getElementById('sortIncomplete');
const numTasksLeft = document.getElementById('tasksLeft');
var date = new Date();
var dayOfWeek = date.getDay();
var modified = document.lastModified;

export { listSect, addBtn, sortAll, sortComplete, sortIncomplete, numTasksLeft, date, dayOfWeek, modified };