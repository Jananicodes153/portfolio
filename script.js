// Welcome message
console.log("Welcome to B. Janani's Portfolio");

// Typing Effect
const text = "Aspiring Software Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

window.onload = typing;