const form = document.querySelector("#myForm form");
const button = document.querySelector("#myForm button");
const email= document.getElementById("email");
const error = document.querySelector(".error");
const message = document.getElementById("message");

const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let email_val = (event) => {
    if(regex.test(email.value)){
        email.style.border = "2px solid green";
        error.style.display = "none";
        message.innerHTML = "Valid";
        message.style.color = "green";
    } else {
        event.preventDefault();
        message.style.display = "inline";
        email.style.border = "2px solid hsl(0, 93%, 68%)";
        error.style.display = "inline";
    }
}

form.addEventListener("keyup", email_val);
button.addEventListener("click", email_val);