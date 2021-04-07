// import
import { updateNames, updateContacts, contact } from './UpdateContacts.js';

// define variables
var messageScreen = document.getElementById('messages');
var numOfContacts = 1;
var numContactInput = document.getElementById('numContacts');
var previousContactNum = 0;
var headerTime = document.getElementById('headTime');
var otherOptionsError = document.getElementById('otherError');
var convoTimeInput = document.getElementById('convoTime');
var batteryInput = document.getElementById('batteryInput');

// send messages to phone
function texting(e) {
    // get the value from the message box and check if empty
    let message = document.getElementById('message-box');
    let missingText = document.getElementById('textMissing');
    // check if the message is empty
    if (message.validity.valueMissing) {
        // empty text message
        missingText.textContent = 'Hey, buddy... you gotta put some text for a message to show up...';
        // add a fading in effect
        if (!missingText.classList.contains('fadeIn')) { missingText.classList.add('fadeIn'); }
    } else {
        missingText.classList.remove('fadeIn');
        missingText.textContent = '';
        // create elements for the messages
        let messageBox = document.createElement('div');
        let textBox = document.createElement('div');
        // anything in the text box is put into the message
        textBox.textContent = message.value;
        // check if the target pressed is the receive or send button
        if (e.target == receiveBtn) {
            // set some special info based on name
            if (numOfContacts > 1) {
                let receiveName = (contact != 'Unknown Number') ? document. getElementById('name').value : contact;
                let nameBox = document.createElement('div');
                nameBox.textContent = receiveName;
                receiveName.classList('receive-name');
                messageBox.appendChild(nameBox);
            }
            // add class based on sent or received
            messageBox.classList.add('received');
            textBox.classList.add('receivedMessage');
        } else {
            messageBox.classList.add('sent');
        }
        message.value = '';
        messageBox.appendChild(textBox);
        messageScreen.appendChild(messageBox);
    }   
}

// update the contact info
function update() {
    let headsUp = document.getElementById('updateNote');
    // number of contacts has to be filled in
    numOfContacts = (numContactInput.value != '') ? numContactInput.value : 0;
    // check if num is within range
    if (numContactInput.validity.valid) {
        headsUp.textContent = (numOfContacts < 10) ? '' : 'You can only put in the first 10 names';
        // update the appropriate things
        previousContactNum = updateContacts(numOfContacts, previousContactNum);
        updateNames(numOfContacts, previousContactNum);
    } else {
        headsUp.textContent = `You can't possibly have ${numOfContacts} recipients in a chat...`
    }
    headsUp.classList.add('fadeIn');
}

// update the time in the header of the phone screen
function updateHeadTime() {
    let headTime = headerTime.value;
    // check if value is empty or if pattern matches
    if (headerTime.validity.patternMismatch) {
        otherOptionsError.textContent = 'Enter a valid time please';
        if (!otherOptionsError.classList.contains('fadeIn')) { otherOptionsError.classList.add('fadeIn'); }
    } else {
        document.getElementById('worldTime').textContent = headTime;
        otherOptionsError.classList.remove('fadeIn');
        otherOptionsError.textContotherOptionsErrorent = '';
    }
}

// post a conversation time
function updateConvoTime() {
    let convoTime = convoTimeInput.value;
    let convoTimeDiv = document.createElement('div');
    convoTimeDiv.textContent = convoTime;
    convoTimeDiv.classList.add('convo-time');
    messageScreen.appendChild(convoTimeDiv);
}

// update the battery of the phone
function updateBattery() {
    let batteryPercent = batteryInput.value;
    if (batteryInput.validity.valid) {
        otherOptionsError.classList.remove('fadeIn');
        otherOptionsError.textContotherOptionsErrorent = '';
        document.getElementById('batteryPercent').textContent = batteryPercent;
        let batteryIcon = document.getElementById('batteryIcon');
        switch (true) {
            case (batteryPercent < 1):
                batteryIcon.innerHTML = `<i class="fas fa-battery-empty battery"></i>`;
                break;
            case (batteryPercent < 36):
                batteryIcon.innerHTML = `<i class="fas fa-battery-quarter battery"></i>`;
                break;
            case (batteryPercent < 66):
                batteryIcon.innerHTML = `<i class="fas fa-battery-half battery"></i>`;
                break;
            case (batteryPercent < 91):
                batteryIcon.innerHTML = `<i class="fas fa-battery-three-quarters battery"></i>`;
                break;
            default:
                batteryIcon.innerHTML = `<i class="fas fa-battery-full battery"></i>`;
        }
    } else {
        otherOptionsError.textContent = `Ever seen a phone at ${batteryPercent}%?`;
        if (!otherOptionsError.classList.contains('fadeIn')) { otherOptionsError.classList.add('fadeIn'); }
    }
}

export { update, texting, updateHeadTime, updateConvoTime, updateBattery };