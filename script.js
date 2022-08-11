let sliderElement = document.querySelector("#slider");
let inputElement = document.querySelector("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");
let charset = " ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@!";
let novasenha = "";

sizepassword.innerHTML = sliderElement.value
slider.oninput = function(){
    sizepassword.innerHTML = this.value
} 

function generatePassword(){
    let pass = "";
    for(let i = 0,n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerpassword.classList.remove("hide");
    password.innerHTML = pass;

}


