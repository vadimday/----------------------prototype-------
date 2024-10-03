class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
console.log("Площа:", circle.getArea().toFixed(2));
console.log("Периметр:", circle.getCircumference().toFixed(2));
