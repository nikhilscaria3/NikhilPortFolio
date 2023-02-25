//performing a task

var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateFname() {
  var name = document.getElementById('contact-fname').value;
  if (name.length == 0) {
    fnameError.innerHTML = 'First Name is Required';
    return false;
  }
  fnameError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateLname() {
  var name = document.getElementById('contact-lname').value;
  if (name.length == 0) {
    lnameError.innerHTML = 'Last Name is Required';
    return false;
  }
  lnameError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById('contact-email').value;
  if (email.length == 0) {
    emailError.innerHTML = ' Email is Required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'email invalid'
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateMessage() {
  var message = document.getElementById('comment').value;
  if (message.length == 0) {
    messageError.innerHTML = 'Message is Required';
    return false;
  }
  var required = 30;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = 'Kindly include 30 words';
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateForm() {

  if(!validateFname()|| !validateLname() || !validateEmail() || !validateMessage())
  {
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fix the error ';

    setTimeout(function(){
    submitError.style.display = 'none';},3000);
    return false;
    }
  submitError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}

// function validateForm() {
//    var contact ={
//     from_name : document.getElementById("contact-fname").value,
//     email: document.getElementById("contact-email").value,
//     message  : document.getElementById("comment")

//    }
//       emailjs.sendForm("service_bjznj5e","template_medp5j1", contact)
// }