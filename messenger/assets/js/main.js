// define all the variables and buttons to update or give event listeners to
let receiveBtn = document.getElementById('receiveBtn');
let sendBtn = document.getElementById('sendBtn');
let updateBtn = document.getElementById('updateBtn');
var messageScreen = document.getElementById('messages');
var contact = document.getElementById('contact-name');
var numOfContacts = 1;
var numContactInput = document.getElementById('numContacts');
var previousContactNum = 0;

// event listeners
receiveBtn.addEventListener('click', texting);
sendBtn.addEventListener('click', texting);
updateBtn.addEventListener('click', update);

// send messages to phone
function texting(e) {
    // get the value from the message box and check if empty
    let message = document.getElementById('message-box');
    let emptyWarning = document.getElementById('emptyText');
    if (message.value === '') {
        emptyWarning.classList.remove('hidden');
    } else {
        if (!emptyWarning.classList.contains('hidden')) { emptyWarning.classList.add('hidden'); }
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
                messageBox.appendChild(nameBox);
            }
            // add class based on sent or received
            messageBox.classList.add('received');
        } else {
            messageBox.classList.add('sent');
        }
        message.value = '';
        messageBox.appendChild(textBox);
        messageScreen.appendChild(messageBox);
    }   
}

// add optional names
function addNames(startNum, contactNum) {
    for (let i = startNum; i <= contactNum; i++) {
        // create appropriate elements
        let contactName = document.createElement('div');
        let contactNameLabel = document.createElement('label');
        let contactNameInput = document.createElement('input');
        // set attributes and text for the appropriate elements
        // contact name label
        contactNameLabel.setAttribute('for', `contact-name${i}`);
        contactNameLabel.innerHTML = `Name ${i}: `;
        // contact name input
        contactNameInput.setAttribute('type', 'text');
        contactNameInput.setAttribute('name', `contact-name${i}`);
        contactNameInput.setAttribute('id', `contact-name${i}`);
        // append elements
        contactName.appendChild(contactNameLabel);
        contactName.appendChild(contactNameInput);
        optionalNames.appendChild(contactName);
    }
}

// remove the names when the updates num of contacts is less than the prior
function removeNames(startNum, removeNum) {
    for (let i = startNum; i > removeNum; i--) {
        let contactName = document.getElementById(`contact-name${i}`);
        contactName.remove();
    }
}

// update the number of contacts
function updateContacts(contacts, previousContacts) {
    let optionalNames = document.getElementById('optionalNames');
    let singleName = document.getElementById('singleName');
    contacts = parseInt(contacts);
    // check if this is the first update
    if (previousContacts == 0) {
        if (contacts > 1) {
            optionalNames.classList.remove('hidden');
            addNames(1, contacts);
            singleName.classList.add('hidden');
        }
    } else {
        // check if contacts > 1
        if (contacts > 1) {
            optionalNames.classList.remove('hidden');
            singleName.classList.add('hidden');
            // operate based on if prevContacts < currentContacts
            if (previousContacts < contacts) {
                addNames((previousContacts + 1), contacts);
            } else if (previousContacts > contacts) {
                removeNames(previousContacts, contacts)
            }
        } else {
            removeNames(previousContacts, contacts);
            optionalNames.classList.add('hidden');
            singleName.classList.remove('hidden');
        }
    }
    previousContacts = contacts;
    return previousContacts;
}

// update contactNames
function updateNames(contactNum, prevContactNum) {
    if (contactNum == 1) {
        let contactName = document.getElementById('nameContact');
        if (contactName.value != '') {
            contact.innerHTML = contactName.value;
        } 
    } else {
        var allNames = [];
        contact.textContent = '';
        for (let i = 1; i <= prevContactNum; i++) {
            let name = document.getElementById(`contact-name${i}`).value;
            allNames[i - 1] = name;
        }
        for (let j = 0; j < allNames.length; j++) {
            contact.textContent += (allNames[j] != allNames[allNames.length - 1]) ? `${allNames[j]}, ` : `${allNames[j]}`;
        }
        if (contact.textContent.length > 13) {
            contact.textContent = `${contact.textContent.substring(0, 13)} ... (${allNames.length})`;
        }
    }
}

// update the information on the phone
function update() {
    numOfContacts = numContactInput.value;
    previousContactNum = updateContacts(numOfContacts, previousContactNum);
    updateNames(numOfContacts, previousContactNum);
}