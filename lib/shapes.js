//shape classes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="200" height="200" fill="${this.color}" />`;
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80"  fill="${this.color}" />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
class Ellipse extends Shape {
    render() {
        return `<ellipse cx="150" cy="50" rx="100" ry="50"  fill="${this.color}" />`;
    }
}
module.exports = { Square, Circle, Triangle, Ellipse };