const links = [
    {
        label: "Week 1 Exercise/Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Exercise/Notes",
        url: "week2/index.html"
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