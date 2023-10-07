import "./main.css";

class LogoAnimator {
	private section: HTMLDivElement;
	private logo: HTMLElement;
	private xPosition: number;
	private yPosition: number;
	private xSpeed: number;
	private ySpeed: number;
	private readonly FPS: number = 60;

	constructor() {
		this.section = document.querySelector("div")!;
		this.logo = document.querySelector(".logo") as HTMLElement;
		this.xPosition = 10;
		this.yPosition = 10;
		this.xSpeed = 4;
		this.ySpeed = 4;

		this.initialize();
	}

	private initialize(): void {
		this.section.style.height = window.innerHeight + "px";
		this.section.style.width = window.innerWidth + "px";
		window.addEventListener("resize", this.resizeHandler.bind(this));
		setInterval(this.update.bind(this), 1000 / this.FPS);
	}

	private update(): void {
		if (this.xPosition + (this.logo.clientWidth ?? 0) >= window.innerWidth || this.xPosition <= 0) {
			this.xSpeed = -this.xSpeed;
			document.body.style.backgroundColor = this.randomColor();
		}
		if (
			this.yPosition + (this.logo.clientHeight ?? 0) >= window.innerHeight ||
			this.yPosition <= 0
		) {
			this.ySpeed = -this.ySpeed;
			document.body.style.backgroundColor = this.randomColor();
		}

		this.xPosition += this.xSpeed;
		this.yPosition += this.ySpeed;
		this.logo.style.left = this.xPosition + "px";
		this.logo.style.top = this.yPosition + "px";
	}

	private randomColor(): string {
		let color = "#";
		color += Math.random().toString(16).slice(2, 8).toUpperCase();
		return color;
	}

	private resizeHandler(): void {
		this.xPosition = 10;
		this.yPosition = 10;
		this.section.style.height = window.innerHeight + "px";
		this.section.style.width = window.innerWidth + "px";
	}
}

new LogoAnimator();
