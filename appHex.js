const letras = ["a", "b", "c", "d", "e", "f", "a", "b", "c"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let colorHex = "";
let numeroRamdom;
let ramdomizer;

btn.addEventListener("click", () => {
    getRandomNumber();

    document.body.style.backgroundColor = (`#${colorHex}`);
    color.textContent = `#${colorHex}`;
    colorHex = "";  
});

const getRandomNumber = () => {
    
    for(let i = 0; i < 6; i++){
        numeroRamdom = Math.floor(Math.random() * 9);
        ramdomizer = Math.floor(Math.random() * 2);
        if(ramdomizer === 0){
            colorHex += letras[numeroRamdom];
        }else if(ramdomizer === 1){
            colorHex += numeroRamdom;
        }
    }  
    console.log(colorHex);
    console.log(`${ramdomizer} y ${numeroRamdom}`);
}