const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-1",
    "triangle-2",
    "triangle-3",
    "circle",
    "triangle-5",
    "triangle-6",
];
const backgroundColors = ["#01d2fd","#E50046","#706D54","#604652","#FF9B17", "#ffc700", "#fe9f12", "#06d0c7","#ffff","#F16767","#73946B"]

const colors = ["#01d2fd","#E50046","#706D54","#604652","#FF9B17", "#ffc700", "#fe9f12", "#06d0c7","#ffff","#F16767","#73946B"];
const boxes = document.querySelectorAll(".container div");
const container = document.querySelectorAll(".wrapper container");

let generatePattern = () => {
    container.
    boxes.forEach((box) => {
        box.className = "";

        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);