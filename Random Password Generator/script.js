const copyIcon = document.querySelector(".fa-copy");
const inputPassword = document.querySelector(".input_password");
const generatePassword = document.querySelector(".generate_password");
const updateMessage = document.querySelector(".update_message");
const tickIcon = document.querySelector(".update_message .fa-check");
const crossIcon = document.querySelector(".update_message .fa-xmark");
const boxText = document.querySelector(".box_text");


const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "}!@#$)%-^<&*{|?=+>(";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword () {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() *symbols.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    inputPassword.value = password;
};

let copiedText = "";
copyIcon.addEventListener("click", () => {
    copiedText = inputPassword.value;
    if(inputPassword.value === "") {
        console.log("There is not password to copied");
        updateMessage.style.backgroundColor = "red";
        tickIcon.style.display = "none";    
        crossIcon.style.display = "inline";
        boxText.innerHTML = "No text copied";
        showTickMessage();
        clearInput();
    } else {
        console.log(`${copiedText} password is copied`);
        updateMessage.style.backgroundColor = "#52b788";
        tickIcon.style.display = "inline";  
        crossIcon.style.display = "none";
        boxText.innerHTML = "Text copied";
        showTickMessage();
        clearInput();
    }
})

function showTickMessage() {
    updateMessage.style.display = "flex"
    updateMessage.classList.add("show"); 

    setTimeout(() => {
    updateMessage.style.display = "flex"
        updateMessage.classList.remove("show"); 
    }, 2000);
}

function clearInput () {
    inputPassword.value = "";
}