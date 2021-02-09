const taskList = [
    {
        name: "Laundry",
        details: "do the laundry and all that jazz"
    },
    {
        name: "Beat up gardener",
        details: "he beat me at monopoly, that cheater"
    },
    {
        name: "Call wife",
        details: "she cheated on me with the gardener when she realized he's better than me"
    },
    {
        name: "Cry",
        details: "it's self-explanatory"
    },
    {
        name: "Eat dinner",
        details: "chicken nuggies"
    }
]

console.log(taskList)

const listSect = document.getElementById('taskList');

for (let i = 0; i < taskList.length; i++) {
    let taskDiv = document.createElement('div');
    let taskName = document.createElement('h3');
    let taskDeets = document.createElement('p');
    let checkOff = document.createElement('input');
    checkOff.type = 'checkbox';
    checkOff.name = 'taskCheck';
    
    taskName.textContent = taskList[i].name;
    taskDeets.textContent = ' - ' + taskList[i].details;

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDeets);
    taskDiv.appendChild(checkOff);

    listSect.appendChild(taskDiv);
}