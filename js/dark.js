
var d = new Date();
var head = document.getElementsByTagName('HEAD')[0];

//check what time it is
if (d.getHours() > 16) {
    //check if index html file is in root or in a folder
    let cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    if (document.title == 'Portfolio Directory') {
        cssLink.href = 'css/dark.css';
    } else {
        cssLink.href = '../css/dark.css';
    }
    head.appendChild(cssLink);
}