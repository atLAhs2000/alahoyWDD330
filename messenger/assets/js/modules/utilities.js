// import
import { updateNames, updateContacts, contact } from './UpdateContacts.js';

// define variables
var messageScreen = document.getElementById('messages');
var numOfContacts = 1;
var numContactInput = document.getElementById('numContacts');
var previousContactNum = 0;

// send messages to phone
function texting(e) {
    // get the value from the message box and check if empty
    let message = document.getElementById('message-box');
    let missingText = document.getElementById('textMissing');
    if (message.validity.valueMissing) {
        message.setCustomValidity("Hey, buddy... you gotta put some text for a message to show up...");
        missingText.textContent = 'Hey, buddy... you gotta put some text for a message to show up...';
    } else {
        message.setCustomValidity("");
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

// update the information on the phone
function update() {
    let headsUp = document.getElementById('updateNote');
    numOfContacts = (numContactInput.value != '') ? numContactInput.value : 0;
    if (numContactInput.validity.valid) {
        headsUp.textContent = (numOfContacts < 10) ? '' : 'You can only put in the first 10 names';
        previousContactNum = updateContacts(numOfContacts, previousContactNum);
        updateNames(numOfContacts, previousContactNum);
    } else {
        headsUp.textContent = `You can't possibly have ${numOfContacts} recipients in a chat...`
    }
}

export { update, texting };