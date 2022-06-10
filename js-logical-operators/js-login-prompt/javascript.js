let userName;
let password;

userName = prompt("Please Enter Your UserName For The System.");

if (userName == "Admin") {
    alert("Welcome Admin");
    
} else if (userName != "Admin") {
    alert("User not recognised.");
} else (userName == null) {
    alert("Login cancelled");
}