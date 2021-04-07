import { update, texting } from './modules/utilities.js';

// define all the variables and buttons to update or give event listeners to
let receiveBtn = document.getElementById('receiveBtn');
let sendBtn = document.getElementById('sendBtn');
let updateBtn = document.getElementById('updateBtn');

// event listeners
receiveBtn.addEventListener('click', texting);
sendBtn.addEventListener('click', texting);
updateBtn.addEventListener('click', update);
