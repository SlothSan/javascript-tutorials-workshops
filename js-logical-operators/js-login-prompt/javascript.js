let userName;
let password;

userName = prompt("Please Enter Your UserName For The System.");

if (userName === "Admin") {
    alert("Welcome Admin");
 
    


} else if (userName === '' || userName === null) {
    alert("Login Cancelled.");
} else {
    alert("UserName not recognised by the system.");
}