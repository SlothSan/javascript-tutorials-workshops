let userName;
let password;

userName = prompt("Please Enter Your UserName For The System.");

if (userName === "Admin") {
    document.getElementById("userName").innerHTML = `Hi, ${userName}`;
    password = prompt("Please Enter Your Password For The System"); 

    if (password === "TheMaster") {
        document.getElementById("password").innerHTML = `Hi, ${userName}, password is correct!`;
        document.getElementById("welcome-message").innerHTML = "Welcome to the top secret mainframe that contains all the top secret stuff.";
        alert("Welcome Admin, System Access Granted!");
    } else if (password === "" || password === null) {
        alert("Login Cancelled");
    } else {
        alert("Password Not Recognised");
    }
 
    

} else if (userName === '' || userName === null) {
    alert("Login Cancelled.");
} else {
    alert("UserName not recognised by the system.");
}