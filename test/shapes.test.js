//Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.
const {Circle, Square, Triangle} = require('./shapes');

//Test Circles
describe('Circle test:', () => {
    it('Should render correctly.', () => {
    const shape = new Circle();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}" />`);
    });
});

//Test Squares
describe('Square test:', () => {
    it('Should render correctly.', () => {
    const shape = new Square();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="50%" width="50%" fill="${color}"/>`);
    });
});

//Test triangles
describe('Triangle test:', () => {
    it('Should render correctly.', () => {
    const shape = new Triangle();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${color}"/>`);
    });
});








// //Validate.js
// class Validate {}

// Validate.prototype.isPassword = (password) => {
//   // TODO: Write code that checks if the password is less than 8 characters and returns false if so.

//   if (password.length < 8) {
//     return false;
//   }

//   // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.

//   // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
//   const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$');

//   if (pattern.test(password)) {
//     return true;
//   }

//   return false;
// };

// module.exports = Validate;
