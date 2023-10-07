import "./main.css";

const section: HTMLDivElement = document.querySelector("div")!;
const logo: HTMLElement = document.querySelector(".logo") as HTMLElement;
const FPS: number = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
let xPosition: number = 10;
let yPosition: number = 10;
let xSpeed: number = 4;
let ySpeed: number = 4;

function update() {
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
}

setInterval(() => {
  if (
    xPosition + (logo.clientWidth ?? 0) >= window.innerWidth ||
    xPosition <= 0
  ) {
    xSpeed = -xSpeed;
    logo.style.backgroundColor = randomColor();
  }
  if (
    yPosition + (logo.clientHeight ?? 0) >= window.innerHeight ||
    yPosition <= 0
  ) {
    ySpeed = -ySpeed;
    document.body.style.backgroundColor = randomColor();
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);

function randomColor(): string {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();

  return color;
}

// console.log(randomColor());

window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});