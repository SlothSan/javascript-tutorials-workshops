const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good Day, General Kenobi!";
} else {
    greeting = "Good Evening, General Kenobi!";
}

document.getElementById("demo").innerHTML = greeting;