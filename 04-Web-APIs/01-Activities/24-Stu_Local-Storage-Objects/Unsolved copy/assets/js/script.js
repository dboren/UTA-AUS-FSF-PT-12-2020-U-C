var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
  var userObject = {
    firstName: firstNameInput.value.trim(),
    lastNameL: lastNameInput.value.trim(),
    email: emailImput.value.trim(),
    password: passwordInput.value.trim()
  };
  console.log('userObject: ', userObject);
  // TODO: Set new submission to local storage 
  localStorage.setItem('userObject', JSON.stringify(userObject));
  
});

var obj = localStorage.getItem('userObject');
console.log('user object from local storage', obj);
console.log('user object parsed', JSON.parse(obj));