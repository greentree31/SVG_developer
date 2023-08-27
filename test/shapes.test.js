const { Square, Circle, Triangle, Ellipse } = require("./lib/shapes");

describe("Square", () => {
    test("this should create a blue square", () => {
        const expectedSVG = 
        `<rect x="100" y="100" width="300" height="300" fill="#3352FF" />`;
        const square = new Square();
        square.setColor("#3352FF");
        const actualSVG= square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test("add a fillColor", () => {
        const expectedSVG =
        `<rect x="100" y="100" width="300" height="300" fill="#30D5C8" />`;
        const square = new Square();
        square.setColor("#30D5C8");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});
describe("Circle", () => {
    test("this should create a lime colored circle", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="#A8FF6F" />';
      const circle = new Circle();
      circle.setColor("#A8FF6F");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("add a fillColor", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="#30D5C8" />';
      const circle = new Circle();
      circle.setColor("#30D5C8");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});


describe("Triangle", () => {
    test("this should create a lavender triangle", () => {
      const expectedSvg =
        '<polygon points="250, 60 100, 400 400,400" fill="#BB9BFF" />';
      const triangle = new Triangle();
      triangle.setColor("#BB9BFF");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("add a fillColor", () => {
      const expectedSvg =
        '<polygon points="250, 60 100, 400 400,400" fill="#30D5C8" />';
      const triangle = new Triangle();
      triangle.setColor("#30D5C8");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Ellipse", () => {
    test("this should create a fuchsia ellipse", () => {
      const expectedSvg =
        '<ellipse  cx="150" cy="50" rx="100" ry="50" fill="#FF00A2" />';
      const ellipse = new Ellipse();
      ellipse.setColor("#FF00A2");
      const actualSvg = ellipse.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("add a fillColor", () => {
      const expectedSvg =
        '<ellipse   cx="150" cy="50" rx="100" ry="50" fill="#30D5C8" />';
      const ellipse = new Ellipse();
      ellipse.setColor("#30D5C8");
      const actualSvg = ellipse.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});