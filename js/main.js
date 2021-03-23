const links = [
    {
        label: "Week 1 Exercise/Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Exercise/Notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Exercise/Notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Exercise/Notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Exercise/Notes",
        url: "week5/index.html"
    },
    {
        label: "toDo Challenge",
        url: "toDo/index.html"
    },
    {
        label: "Week 7 Notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 Notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 Notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 Notes",
        url: "week10/index.html"
    },
    {
        label: "Block 2 Challenge: Messenger Simulation",
        url: "messenger/index.html"
    }
]

for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let itemAnchor = document.createElement('a');
    
    itemAnchor.setAttribute('href', links[i].url);
    itemAnchor.innerHTML = links[i].label;
    item.appendChild(itemAnchor);

    document.getElementById('worklist').appendChild(item);
}