const form = document.getElementById("form");
const usrename = document.getElementById("username");
const email = document.getElementById("email");
const phneNumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// add events
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// Define the validation function
const validate = () => {
  const usrenameValue = usrename.value().trim();
  const emailValue = email.value().trim();
  const phneNumberValue = phneNumber.value().trim();
  const passwordValue = password.value().trim();
  const cpasswordValue = cpassword.value().trim();

  // validate username
  if(usrenameValue === ""){
    setErrorMsg(usrenameValue, 'username cannot be blank')
  }else if(usrenameValue.length <= 2){
    setErrorMsg(usrenameValue, 'username min 3 char')
  }else{
    setSucessMsg(usrenameValue)
  }

  // 
};

