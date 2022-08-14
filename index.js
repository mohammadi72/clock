let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");
let night = document.querySelector(".night");
let message = `The background changes according to the clock.Our recommendation is to run the program once a night and once a day.`;
let myArray = message.split("");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = 90 + (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  secondHand.style.backgroundColor = "red";
  const minutes = now.getMinutes();
  const minutesDegree = 90 + (minutes / 60) * 360 + (seconds / 60) * 6;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = 90 + (hours / 12) * 360 + (minutes / 60) * 30;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
function loading() {
  const now = new Date();
  const hours = now.getHours();
  if (hours >= 6 && hours <= 18) {
    sun.style.opacity = "1";
    moon.style.opacity = "0";
    document.body.style.background = "none";
    document.querySelector("#typeText").style.color = "black";

    night.style.display = "none";

    showMessage();
  }
}
function showMessage() {
  console.log(myArray.length);
  let loopTimer;
  if (myArray.length > 0) {
    document.getElementById("typeText").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout(showMessage, 300);
}
setDate();
setInterval(setDate, 1000);
document.addEventListener("DOMContentLoaded", loading);

// *******************************************************************************************************************
let sky = document.querySelector(".sky");

function createDiv(size) {
  let circle = document.createElement("div");
  circle.classList.add("circle");

  let randRange5 = Math.floor(Math.random() * 5) + 1;
  circle.classList.add(`blink_${randRange5}`);

  let widthAndHeight = random(size, "px");
  circle.style.height = circle.style.width = widthAndHeight;

  circle.style.left = random(window.innerWidth, "px");
  circle.style.top = random(window.innerHeight, "px");
  // circle.style.backgroundColor = randomColor();

  sky.appendChild(circle);
}

let [starSlider, sizeSlider] = document.querySelectorAll(".slider");
let [stars, size] = document.querySelectorAll(".value");

[starSlider, sizeSlider].forEach((slider) => {
  slider.addEventListener("change", () => {
    stars.textContent = starSlider.value;
    size.textContent = sizeSlider.value;
  });
  slider.addEventListener("change", () => {
    paintStars(starSlider.value, sizeSlider.value);
  });
});

function paintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  for (let i = 0; i < stars; i++) {
    createDiv(size);
  }
}

function random(range, unit) {
  let randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

paintStars(50, 5);

// function randomColor() {
//   let range255 = () => random(255, "");
//   return `rgb(${range255()},${range255()}, ${range255()}`;
// }
