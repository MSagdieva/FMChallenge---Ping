let form = document.querySelector(".subscribe-form");
let email = document.querySelector(".email");



function validateForm(){
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!(validateEmail(email.value))){
        email.classList.add('error');
    }
    else{
        email.classList.remove('error');
    }
})
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
validateForm();
console.log(validateEmail("grigorieva.ms@yandex.ru"));