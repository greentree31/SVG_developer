class createSVG {
    constructor() {
        this.textE = "";
        this.shapeE = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeE}${this.textE}</svg>`;
    }
    setText(message, color) {
        if (message.length > 5) {
            throw new Error("Text must be less than 5 characters");
        }
        this.textE = `<text x="150" y="70" font-size="40" text-anchor="middle" fill="${color}">${message}</text>`;
    }
    setShape(shape) {
        this.shapeE = shape.render();
    }
}
module.exports = createSVG;