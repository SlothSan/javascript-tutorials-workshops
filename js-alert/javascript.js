const button = document.querySelector("button");

function hello() {
    const name = prompt('What is your name Comrade?');
    if (name === "Marx") {
        alert(`Hello Comrade ${name}, the revolution is underway.`);
    } else {
        alert (`${name} is capitalist scum, off to the gulag with you`);
    }
}

button.addEventListener(`click`, hello)