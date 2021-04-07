import { update, texting, updateHeadTime, updateConvoTime, updateBattery } from './modules/utilities.js';

// define all the variables and buttons to update or give event listeners to
let phoneSendBtn = document.getElementById('phoneSend');
let receiveBtn = document.getElementById('receiveBtn');
let sendBtn = document.getElementById('sendBtn');
let updateBtn = document.getElementById('updateBtn');
let headTimeBtn = document.getElementById('headTimeBtn');
let convoTimeBtn = document.getElementById('convoTimeBtn');
let updateBatteryBtn = document.getElementById('updateBattery');

// event listeners
phoneSendBtn.addEventListener('click', texting);
receiveBtn.addEventListener('click', texting);
sendBtn.addEventListener('click', texting);
updateBtn.addEventListener('click', update);
headTimeBtn.addEventListener('click', updateHeadTime);
convoTimeBtn.addEventListener('click', updateConvoTime);
updateBatteryBtn.addEventListener('click', updateBattery);

export { phoneSendBtn };