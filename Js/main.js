const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// add events
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// for final data validatoin
const sucessmsg = () => {
  let inputContainer = document.getElementsByClassName("input-container");
  var count = inputContainer.length - 1;
  for (let i = 0; i < inputContainer.length; i++) {
    if (inputContainer[i].className === "input-container sucess") {
      var sRate = 0 + i;
      sendData(count, sRate);
    } else {
      return false;
    }
  }
};

const sendData = (sRate, count) => {
  if (sRate === count) {
    // swal('Welcome','Regsitration Successful','sucess');
    swal(`Welcome ${username.value}`, "Registration Successful", "success");
    document.querySelector(".btn").style.backgroundColor = "green";
    location.href = `https://www.google.com`;
  } else {
    swal(`Try again! ${username.value}`, "Registration Failed", "error");
    document.querySelector(".btn").style.backgroundColor = "red";
  }
};
// more email validation
const isEmail = (emailValue) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    return true;
  }
  return false;
};

// Define the validation function
const validate = () => {
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phoneNumber.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();

  // Validate username
  if (userValue === "") {
    setErrormsg(username, "username cannot be blank");
  } else if (userValue.length <= 2) {
    setErrormsg(username, "username minimum 3 character");
  } else {
    setSuccessmsg(username);
  }

  // validate email
  if (emailValue === "") {
    setErrormsg(email, "email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrormsg(email, "Not valid Email");
  } else {
    setSuccessmsg(email);
  }

  // Validate phonenumber
  if (phoneValue === "") {
    setErrormsg(phoneNumber, "username cannot be blank");
  } else if (phoneValue.length != 10) {
    setErrormsg(phoneNumber, "Not a valid phone number");
  } else {
    setSuccessmsg(phoneNumber);
  }

  // Validate Password
  if (passwordValue === "") {
    setErrormsg(password, "password cannot be blank");
  } else if (passwordValue.length <= 5) {
    setErrormsg(password, "Minimum 6 character");
  } else {
    setSuccessmsg(password);
  }

  // Validate Cpassword
  if (cpasswordValue === "") {
    setErrormsg(cpassword, "confirm password cannot be blank");
  } else if (passwordValue !== cpasswordValue) {
    setErrormsg(cpassword, "Password are not matching");
  } else {
    setSuccessmsg(cpassword);
  }
  sucessmsg();
};

function setErrormsg(input, errormsgs) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");
  inputContainer.className = "input-container error";
  small.innerText = errormsgs;
}

function setSuccessmsg(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container sucess";
}

// password show and hide
const showIcon = document.querySelector(".showpwd");
const pwdInput = document.getElementById("password");

showIcon.addEventListener("click", () => {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
    showIcon.classList.replace("ri-eye-fill", "ri-eye-off-fill");
  } else {
    pwdInput.type = "password";
    showIcon.classList.replace("ri-eye-off-fill", "ri-eye-fill");
  }
});
