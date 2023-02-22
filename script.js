//performing a task

var fnameError = document.getElementById('fname-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateFname() {
  var name = document.getElementById('contact-fname').value;
  if (name.length == 0) {
    fnameError.innerHTML = 'First Name Is Required';
    return false;
  }
  fnameError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById('contact-email').value;
  if (email.length == 0) {
    emailError.innerHTML = ' Email is Required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invalid'
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateMessage() {
  var message = document.getElementById('subject').value;
  if (message.length == 0) {
    messageError.innerHTML = 'Message Is Required';
    return false;
  }
  var required = 30;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = 'Kindly Include 30 Words';
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}
function validateForm() {

  if(!validateFname()|| !validateEmail() || !validateMessage())
  {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please Fix The Error ';

    setTimeout(function(){
    submitError.style.display = 'none';},3000);
    return false;
    }
  submitError.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  return true;
}