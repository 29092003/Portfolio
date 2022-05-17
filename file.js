
console.log('hekbjb');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle('sidebarGo');
    if (document.querySelector(".sidebar").classList.contains('sidebarGo')) {
        setTimeout(() =>{
            document.querySelector('.ham').style.display = 'inline';
            
       }, 250);
       
        document.querySelector('.cross').style.display = 'none';

    }

    else {

        document.querySelector('.ham').style.display = 'none';
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline';
            
       }, 350);
    }


});


// form validation


//define validate 

const validate = () => {

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const enquire = document.getElementById('enquire');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();

});


// more email validation
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");

    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1);
}

//validate function

const nameVal = name.value.trim();
const phoneVal = phone.value.trim();
const addressVal = address.value.trim();
const enquireVal = enquire.value.trim();

// validate username
if (nameVal === "") {
    setErrorMsg(name, 'username cannot be blank');
}
else if (nameVal.length <= 2) {
    setErrorMsg(name, 'username min 3 char');
}
else {
    setSuccessMsg(name);
}

//validate email

if (emailVal === "") {
    setErrorMsg(name, 'email cannot be blank');
}
else if (!isEmail(emailVal)) {
    setErrorMsg(name, 'invalid email');
}
else {
    setSuccessMsg(email);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;
}
