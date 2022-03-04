// let userName = document.getElementById('username');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let errorMsg = document.getElementsByClassName('error');
// let successIcon = document.getElementsByClassName('success-icon');
// let failureIcon = document.getElementsByClassName('error-icon');

// the code below replace the repetitive writing of the above code 
// Theses 2 function are the same just shorthand writing
// If you put a function in the {}, must include "return" keyword
let id = (id) => {
    return document.getElementById(id);
}
let classes = (classes) => document.getElementsByClassName(classes);

let form = id('form'),
    username = id('username'),
    email = id('email'),
    password = id('password'),
    submit = id('submit'),
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('error-icon');

// Add event listener the submit button
// submit.addEventListener('click',(e)=>{
    // this will prevent the error message to disappear when the event is fired 
    // e.preventDefault();
    // If the username is blank, error message will display with the error icon(set opacity to 1)
    // If success, error message set to blank and success icon appear(set opacity to 1)
    // The [0] to target only the first index od the "error" class as we have 3 of them in the form 
/*     if(username.value === ""){
        errorMsg[0].innerHTML = "Please provide your username";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
    } else {
        errorMsg[0].innerHTML = "";
        successIcon[0].style.opacity = "1";
        failureIcon[0].style.opacity = "0";
    }
 }); */
// Writing the function above will get repetitive for 3 field input
// below we will make a better function
 let engine =(id, serial, message) =>{
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }
 }

 submit.addEventListener('click',(e)=>{
    e.preventDefault();
    // let engine =(id, serial, message)
    engine(username, 0, "Please provide your username")
    engine(email, 1, "Please provide your email address")
    engine(password, 2, "Please provide your password")
 });