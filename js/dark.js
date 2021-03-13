
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
    cssLink.href = (document.title == 'Portfolio Directory') ? 'css/dark.css' : '../css/dark.css';
} else {
    //check if file is in root or folder
    cssLink.href = (document.title == 'Portfolio Directory') ? 'css/light.css' : '../css/light.css';
}

//append link to the head
head.appendChild(cssLink);