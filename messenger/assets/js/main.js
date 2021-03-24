let receiveBtn = document.getElementById('receiveBtn');
let sendBtn = document.getElementById('sendBtn');
let updateBtn = document.getElementById('updateBtn');
var messageScreen = document.getElementById('messages');
var contact = document.getElementById('contact-name');
var contactLetter = document.getElementById('contact-letter');
var numOfContacts = 1;

receiveBtn.addEventListener('click', texting);
sendBtn.addEventListener('click', texting);
updateBtn.addEventListener('click', update);

function texting(e) {
    let message = document.getElementById('message-box').value;
    let messageBox = document.createElement('div');
    let textBox = document.createElement('div');
    textBox.textContent = message;
    if (e.target == receiveBtn) {
        let receiveName = (contact != 'Unknown Number') ? document.getElementById('name').value : contact;
        let nameBox = document.createElement('div');
        nameBox.textContent = receiveName;
        messageBox.appendChild(nameBox);
        messageBox.classList.add('received');
    } else {
        messageBox.classList.add('sent');
    }
    messageBox.appendChild(textBox);
    messageScreen.appendChild(messageBox);
}

function update() {
    let numContact = document.getElementById('numContacts').value;
    let nameContact = document.getElementById('nameContact').value;
    //let numContactPlus =  document.createElement('span');
    numOfContacts = numContact;
    contact.innerHTML = nameContact;
    document.getElementById('contact-letter').textContent = nameContact.charAt(0).toUpperCase();
}