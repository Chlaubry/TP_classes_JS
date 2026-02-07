 class Color {
  constructor() {
    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
  }
  toRGB() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export {Color};
