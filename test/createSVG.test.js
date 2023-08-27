const SVG = require("./lib/createSVG");
const { Square } = require("./lib/shapes");

test("should render a 400 x 400 square", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

test("should append text element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should set text message and color", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="40" text-anchor="middle" fill="#999">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#999");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should throw if text exceeds 5 characters", () => {
  const expectedError = new Error("Text must not exceed 5 characters.");
  const svg = new SVG();
  expect(() => svg.setText("HELLO!!", "#666666")).toThrow(expectedError);
});

test("include a shape", () => {
  const expectedSvg =
    '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="200" height="200" fill="#30D5C8" /><text x="150" y="125" font-size="40" text-anchor="middle" fill="#999">SVG</text></svg>';
  const svg = new SVG();
  svg.setText("SVG", "#999");
  const square = new Square();
  square.setColor("#30D5C8");
  svg.setShape(square);
  expect(svg.render()).toEqual(expectedSvg);
});
