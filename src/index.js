import "./styles/main.scss";
import generateJoke from "./generateJoke";
import hatImage from "./assets/hat.jpg";

const hat = document.getElementById("hat");
hat.src = hatImage;

console.log(generateJoke());
console.log("test");
