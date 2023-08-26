const { Square, Circle, Triangle, Ellipse } = require("././lib/shapes");

describe("Square", () => {
    test("this should create a blue square", () => {
        const expectedSVG = 
        `<rect x="100" y="100" width="400" height="400" fill="#3352FF" />`;
        const square = new Square();
        square.setColor("#3352FF");
        const actualSVG= square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test("add a fillColor", () => {
        const expectedSVG =
        `<rect x="100" y="100" width="400" height="400" fill="#FFF06F" />`;
        const square = new Square();
        square.setColor("#FFF06F");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});
describe("Circle", () => {
    test("this should create a lime colored circle", () => {
      const expectedSvg = '<circle cx="400" cy="400" r="400" fill="#A8FF6F" />';
      const circle = new Circle();
      circle.setColor("#A8FF6F");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("add a fillColor", () => {
      const expectedSvg = '<circle cx="400" cy="400" r="400" fill="#FFF06F" />';
      const circle = new Circle();
      circle.setColor("#FFF06F");
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
        '<polygon points="250, 60 100, 400 400,400" fill="#FFF06F" />';
      const triangle = new Triangle();
      triangle.setColor("#FFF06F");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    test("this should create a lavender triangle", () => {
      const expectedSvg =
        '<ellipse cx="400" cy="200" rx="400" ry="200"  fill="#BB9BFF" />';
      const triangle = new Triangle();
      triangle.setColor("#BB9BFF");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("add a fillColor", () => {
      const expectedSvg =
        '<ellipse cx="400" cy="200" rx="400" ry="200" fill="#FFF06F" />';
      const triangle = new Triangle();
      triangle.setColor("#FFF06F");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
});