const inquirer = require("inquirer");
const createSVG = require("./createSvg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class SVG {
    run() {
        return inquirer
        .prompt([
            {
                name: "text",
                type: "input",
                note: "Enter initials. (No more than 5 characters.)",
                validate: (text) =>
                text.length <= 3 ||
                "Initials must not contain more than 5 characters."
            },
            {
                name: "textColor",
                type: "input",
                note: "Color of text you'd like to use.",
            },
            {
                name: "shapeDesign",
                type: "list",
                note: "What design shape would you prefer",
                choices: ["square", "circle", "triangle", "rectangle", "octagon"],
            },
            {
                name: "shapeColor",
                type: "input",
                note: "What color would you like the shape to be?",
            },
        ])
        .then(({ text, textColor, shapeDesign, shapeColor }) => {
            let shape;
            switch (shapeDesign) {
                case "square":
                    shape = new Square();
                    break;
                case "circle":
                    shape = new Circle();
                    break;
                case "triangle":
                    shape = new Triangle();
                    break;
                case "rectangle";
                    shape = new Rectangle();
                default:
                    shape = new Octagon();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new createSVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile ("new.svg", svg.render());
        })
        .then(() => {
            console.log("Developed new.svg");
        })
        .catch((error) => {
            console.log(error);
            console.log("ERROR!! Try again.");
        });
    }
}

module.exports = SVG;
