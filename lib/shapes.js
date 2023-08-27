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
        return `<rect  x="90" y="40" width="400" height="400" fill="${this.color} />`;
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="400" cy="400" r="400" fill="${this.color} />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color} />`;
    }
}
class Ellipse extends Shape {
    render() {
        return `<ellipse cx="100" cy="50" rx="400" ry="200" fill="${this.color} />`;
    }
}
module.exports = { Square, Circle, Triangle, Ellipse };