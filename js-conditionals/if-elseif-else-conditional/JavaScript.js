const time = new Date().getHours();
let greeting;

if (time < 10) {
    greeting = "Good Morning, General Kenobi!";
} else if (time < 20) {
    greeting = "Good Day, General Kenobi!";
} else {
    greeting = "Good Evening, General Kenobi!";
}

document.getElementById("demo").innerHTML = greeting;
