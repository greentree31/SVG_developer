class createSVG {
    constructor() {
        this.textE = "";
        this.shapeE = "";
    }
    render() {
        return `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">${this.shapeE}${this.textE}</svg>`;
    }
    setText(note, color) {
        if (note.length > 5) {
            throw new Error("Text must be less than 5 characters");
        }
        this.textE = `<text x="150" y="70" font-size="40" text-anchor="middle" fill="${color}">${note}</text>`;
    }
    setShape(shape) {
        this.shapeE = shape.render();
    }
}
module.exports = createSVG;