class createSVG {
    constructor() {
        this.textE = "";
        this.shapeE = "";
    }
    render() {
        return `<svg version="1.1" widt="400" height="400" xmlns="http://www.w3.org/2000/svg">${this.shapeE}${this.textE}</svg>`;
    }
    setText(note, color) {
        if (note.length > 4) {
            throw new Error("Text must be less than 4 characters");
        }
        this.textE = `<text x="200" y="150" font-size="40" text-anchor="middle" fill="${color}"${note}</text>`;
    }
    setShape(shape) {
        this.shapeE = shape.render();
    }
}
module.exports = createSVG;