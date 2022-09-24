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

// Define the validation function
const validate = () => {
  const usernameValue = username.value().trim();
  const emailValue = email.value().trim();
  const phoneNumberValue = phoneNumber.value().trim();
  const passwordValue = password.value().trim();
  const cpasswordValue = cpassword.value().trim();

  const isEmail = (emailValue)=>{
     var atSymbol = emailValue.indexOf("@")
     if(atSymbol < 1){
        return false;
     }
     var dot = emailValue.lastIndexOf('.')
     if(dot <= atSymbol +2){
        return false;   
     }
     if(dot === emailValue.length - 1){
        return false;
     }
     return true;
  }
  // basilxg321@gmail.com 16 === -1



  // validate username
  if(usernameValue === ""){
    setErrorMsg(username,'username cannot be blank')
  }else if(usernameValue.length <= 2){
    setErrorMsg(username,'username min 3 char')
  }else{
    setSucessMsg(username)
  }
  
  // validate email
  if(emailValue === ""){
    setErrorMsg(email, 'username cannot be blank')
  }else if(isEmail(emailValue)){
    setErrorMsg(email, 'username min 3 char')
  }else{
    setSucessMsg(email)
  }

  // 
};

function setErrorMsg(input, errormsgs){
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small')
    small.innerText = errormsgs
}