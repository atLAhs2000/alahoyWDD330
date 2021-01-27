
const form = document.forms['search'];
const input = form['searchInput'];

form.addEventListener('submit', search, false);

input.addEventListener('focus', function(){
    if (input.placeholder === 'Search here') {
        input.placeholder = '';
    }
}, false)

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.placeholder = 'Search here';
    }
}, false)

function search(event) {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}