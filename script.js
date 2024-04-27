function ValidateEmail() {
  
  let emailInput = document.getElementById("email");
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email = document.getElementById("error");
  console.log(email);
  if (emailInput.value.match(validRegex)) {  
    email.style.display = "none";
    localStorage.setItem('userEmail', emailInput.value);
  } else {
    email.style.display = "block";
    email.style.fontSize = "1rem";
    email.style.color = "red";
    emailInput.style.backgroundColor = "#FF6155";
    emailInput.style.outlineColor = "black";
    

  }
  console.log(email);
  console.log(emailInput);
}