// import
import { removedAnimate } from './animate.js';
// define all the variables
var contact = document.getElementById('contact-name');
var phoneNumInput = document.getElementById('phoneNum');

// update contactNames
function updateNames(contactNum, prevContactNum) {
    let recipients = document.getElementById('recipientNum');
    if (contactNum == 1) {
        let contactName = document.getElementById('nameContact');
        // set contact name based on value
        contact.innerHTML = (contactName.value === '') ? 'Unknown Number' : contactName.value;
        updateSinglePhone(contactNum, recipients);
    } else {
        var allNames = [];
        contact.textContent = '';
        // add the names into an array
        for (let i = 1; i <= prevContactNum; i++) {
            let name = document.getElementById(`contact-name${i}`).value;
            allNames[i - 1] = (name != '') ? name : 'Unknown Number';
        }
        // add the names to the text header
        for (let j = 0; j < allNames.length; j++) {
            contact.textContent += (j != allNames.length - 1) ? `${allNames[j]}, ` : `${allNames[j]}`;
        }
        // add "..." when there are too many chars
        if (contact.textContent.length > 20) {
            contact.textContent = `${contact.textContent.substring(0, 13)}... `;
        }
        contact.textContent += `(${contactNum})`;
        recipients.textContent = `${contactNum} recipients`;
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
            if (optionalNames.classList.contains('removed')) { optionalNames.classList.remove('removed'); }
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
            removedAnimate(optionalNames);
            singleName.classList.remove('hidden');
        }
    }
    previousContacts = (contacts < 10) ? contacts : 10;
    return previousContacts;
}

// remove the names when the updates num of contacts is less than the prior
function removeNames(startNum, removeNum) {
    for (let i = startNum; i > removeNum; i--) {
        let contactName = document.getElementById(`contact-name-div${i}`);
        removedAnimate(contactName);
    }
}

// add optional names
function addNames(startNum, contactNum) {
    let endNum = (contactNum > 10) ? 10 : contactNum;
    for (let i = startNum; i <= endNum; i++) {
        // create appropriate elements
        let contactName = document.createElement('div');
        let contactNameLabel = document.createElement('label');
        let contactNameInput = document.createElement('input');
        // set attributes and text for the appropriate elements
        contactName.setAttribute('id', `contact-name-div${i}`);
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

function updateSinglePhone(contacts, recipientsVal) {
    let phoneNum = phoneNumInput.value;
    let singleNumWarn = document.getElementById('phoneNumWarn');
    if (phoneNumInput.validity.patternMismatch) {
        singleNumWarn.textContent = 'Enter a valid phone number';
    } else {
        singleNumWarn.textContent = '';
        recipientsVal.textContent = phoneNum;
    }
}

export { updateNames, updateContacts, contact };