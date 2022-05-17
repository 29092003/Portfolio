// {/* <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> */}



console.log('hekbjb');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle('sidebarGo');
    if (document.querySelector(".sidebar").classList.contains('sidebarGo')) {
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline';

        }, 250);

        document.querySelector('.cross').style.display = 'none';

    }

    else {

        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
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
    const enquiry = document.getElementById('enquiry');
}

form.addEventListener('submit', (event) => {
    console.log('submit');
    event.preventDefault();
    validate();

});

const sendData = (nameVal, sRate, count) => {
    if (sRate === count) {
        alert('Registration successfull');
        swal("Welcome!"+ nameVal, "Registration Successfull", "success");
        location.href = `demo.html?name=${nameVal}`;
    }

}

//for final data validation

const successMsg = (nameVal) => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(nameVal, sRate, count);
        }
        else {
            return false;
        };
    };

};


// more email validation
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1);
}

// Defining the validate function

const nameVal = name.value.trim();
const phoneVal = phone.value.trim();
const addressVal = address.value.trim();
const enquiryVal = enquiry.value.trim();

// validate username
if (nameVal === "") {
    setErrorMsg(name, 'username cannot be blank');
} else if (nameVal.length <= 2) {
    setErrorMsg(name, 'username min 3 char');
}
else {
    setSuccessMsg(name);
}



//validate email

if (emailVal === "") {
    setErrorMsg(email, 'email cannot be blank');
}
else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Invalid email');
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

function setErrorMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}

//validate phone

if (phoneVal === "") {
    setErrorMsg(phone, 'Phone cannot be blank');
}
else if (phoneVal != 10) {
    setErrorMsg(phone, 'Invalid phone');
}
else {
    setSuccessMsg(phone);
}

//validate address

if (addressVal === "") {
    setErrorMsg(address, 'address cannot be blank');
}
else if (addressVal != 5) {
    setErrorMsg(address, 'Invalid address');
}
else {
    setSuccessMsg(address);
}

//validate enquiry

if (enquiryVal === "") {
    setErrorMsg(enquiry, 'enquiry cannot be blank');
}
else if (enquiryVal != 5) {
    setErrorMsg(enquiry, 'Invalid enquiry');
}
else {
    setSuccessMsg(enquiry);
}

successMsg(nameVal);

//for final loop data validation

