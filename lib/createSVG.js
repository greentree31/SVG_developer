const inquirer = require("inquirer");
const createSVG = require("./createSvg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class SVG