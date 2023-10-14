const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let red;
let blue;
let green;

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    color.textContent = `rgb(${red}, ${blue}, ${green})`;
});

const getRandomNumber = () => {
    red = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
}