
//declare vars for date and head element
var d = new Date();
var head = document.getElementsByTagName('HEAD')[0];

//create link in document
let cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.type = 'text/css';

//check what time it is
if (d.getHours() > 15) {
    //check if index html file is in root or in a folder
    if (document.title == 'Portfolio Directory') {
        cssLink.href = 'css/dark.css';
    } else {
        cssLink.href = '../css/dark.css';
    }
} else {
    //check if file is in root or folder
    if (document.title == 'Portfolio Directory') {
        cssLink.href = 'css/light.css';
    } else {
        cssLink.href = '../css/light.css';
    }
}

//append link to the head
head.appendChild(cssLink);